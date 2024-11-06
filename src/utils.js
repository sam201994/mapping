// we need the input to be json Schema
export const constructMappingStringFromJson = ({
  targetJson,
  expressions,
}: any) => {
  const typeOfJson = (json: any) => {
    if (Array.isArray(json)) {
      return "LIST_CONTEXT_BLOCK";
    } else if (typeof json === "object" && json !== null) {
      return "OBJECT_UNARY_CONTEXT_BLOCK";
    } else {
      return null;
    }
  };

  const getFullPath = (path: any, key: any, type: any) => {
    if (type === "LIST_CONTEXT_BLOCK") {
      return path ? `${path}[${key}]` : key;
    } else {
      return path ? `${path}.${key}` : key;
    }
  };

  const traverseJson = ({ json, path }: any): string => {
    let result = "";
    if (Array.isArray(json)) {
      const type = typeOfJson(json);
      let item = json[0];
      const fullPath = getFullPath(path, `0`, type);
      const arrStr = [];
      const str = traverseJson({ json: item, path: fullPath });
      arrStr.push(str);
      const finalStr = arrStr.join(",\n");
      result += `${finalStr}\n`;
      return result;
    }

    if (typeof json === "object" && json !== null && !Array.isArray(json)) {
      for (let key in json) {
        const isLastKey = key === Object.keys(json).pop();
        const comma = isLastKey ? "" : ",";

        const value = json[key];
        const valueType = typeOfJson(value);
        const fullPath = getFullPath(path, key, valueType);
        let contextKey = expressions[fullPath] ? expressions[fullPath] : key;
        // const arrStr = [];

        if (
          typeof value === "object" &&
          value !== null &&
          !Array.isArray(value)
        ) {
          result += `"${key}": (
            $__TYPE__ := "${valueType}";
            $__CONTEXT__ := ${contextKey};
            $__CONTEXT__ = $omitField
              ? $omitField
              : $__CONTEXT__.{
                ${traverseJson({ json: value, path: fullPath })}
              }
          )${comma}\n`;
        } else if (Array.isArray(value)) {
          result += `"${key}": (
            $__TYPE__ := "${valueType}";
            $__CONTEXT__ := ${contextKey};
            $__CONTEXT__ = $omitField
              ? $omitField
              : $__CONTEXT__.{
                ${traverseJson({
                  json: value,
                  path: `${fullPath}`,
                })}
              }[]
          )${comma}\n`;
        } else {
          let contextKey = expressions[fullPath]
            ? expressions[fullPath]
            : undefined;
          result += `"${key}": ${contextKey}${comma}\n`;
        }
      }
    }

    return result;
  };

  let mainStr = `{
      "interchanges": (
        $__TYPE__ := "LIST_CONTEXT_BLOCK";
        $__CONTEXT__ := $$.DOC_850[0].interchanges;
        $__CONTEXT__ = $omitField
          ? $omitField
          : $__CONTEXT__.{
            ${traverseJson({
              json: targetJson.interchanges,
              path: "interchanges",
            })}
          }[]
      ),
      "__version": $$.DOC_850[0].__version
    }`;

  return mainStr;
};
