export const targetContent = {
  targetJson: {
    interchanges: [
      {
        interchange_control_header_ISA: {
          authorization_information_qualifier_01:
            "no_authorization_information_present_no_meaningful_information_in_i02_00",
          authorization_information_02: "",
          security_information_qualifier_03:
            "no_security_information_present_no_meaningful_information_in_i04_00",
          security_information_04: "",
          interchange_id_qualifier_05: "mutually_defined_ZZ",
          interchange_sender_id_06: "36223376",
          interchange_id_qualifier_07: "ucc_edi_communications_id_comm_id_08",
          interchange_receiver_id_08: "925485US00",
          interchange_date_09: "221129",
          interchange_time_10: "1457",
          repetition_separator_11: ":",
          interchange_control_version_number_12: "00501",
          interchange_control_number_13: "110000061",
          acknowledgment_requested_14:
            "no_interchange_acknowledgment_requested_0",
          interchange_usage_indicator_15: "production_data_P",
          component_element_separator_16: ">",
        },
        groups: [
          {
            functional_group_header_GS: {
              functional_identifier_code_01: "invoice_information_810_IN",
              application_senders_code_02: "36223376",
              application_receivers_code_03: "925485US00",
              date_04: "20221129",
              time_05: "1457",
              group_control_number_06: "11061",
              responsible_agency_code_07:
                "accredited_standards_committee_x12_X",
              version_release_industry_identifier_code_08: "005010",
            },
            transaction_sets: [
              {
                heading: {
                  transaction_set_header_ST: {
                    transaction_set_identifier_code_01: "810",
                    transaction_set_control_number_02: "11061",
                  },
                  beginning_segment_for_invoice_BIG: {
                    date_01: "20221129",
                    invoice_number_02: "NEURO- 1422",
                    date_03: "20221027",
                    purchase_order_number_04: "3625977383",
                  },
                  reference_information_REF: [
                    {
                      reference_identification_qualifier_01:
                        "department_number_DP",
                      reference_identification_02: "00040",
                    },
                    {
                      reference_identification_qualifier_01:
                        "internal_vendor_number_IA",
                      reference_identification_02: "066101400",
                    },
                    {
                      reference_identification_qualifier_01:
                        "merchandise_type_code_MR",
                      reference_identification_02: "0020",
                    },
                  ],
                  party_identification_N1_loop: [
                    {
                      party_identification_N1: {
                        entity_identifier_code_01: "supplier_manufacturer_SU",
                        name_02: "NEUROGUM, INC.",
                      },
                    },
                    {
                      party_identification_N1: {
                        entity_identifier_code_01: "ship_to_ST",
                        name_02: "NV1 HVFC WHSE MACARRAN NV",
                        identification_code_qualifier_03:
                          "global_location_number_gln_UL",
                        identification_code_04: "0078742100692",
                      },
                      party_location_N3: [
                        {
                          address_information_01: "235 EAST SYDNEY DRIVE",
                          address_information_02: "9204",
                        },
                      ],
                      geographic_location_N4: {
                        city_name_01: "SPARKS",
                        state_or_province_code_02: "NV",
                        postal_code_03: "89434",
                        country_code_04: "US",
                      },
                    },
                  ],
                  terms_of_sale_deferred_terms_of_sale_ITD: [
                    {
                      terms_type_code_01: "basic_discount_offered_08",
                      terms_basis_date_code_02: "receipt_of_goods_15",
                      terms_discount_percent_03: "2",
                      terms_discount_days_due_05: "40",
                      terms_net_days_07: "41",
                    },
                  ],
                  date_time_reference_DTM: [
                    {
                      date_time_qualifier_01: "shipped_011",
                      date_02: "20221122",
                    },
                  ],
                  fob_related_instructions_FOB: {
                    shipment_method_of_payment_01: "collect_CC",
                  },
                },
                detail: {
                  baseline_item_data_invoice_IT1_loop: [
                    {
                      baseline_item_data_invoice_IT1: {
                        quantity_invoiced_02: "24.0",
                        unit_or_basis_for_measurement_code_03: "each_EA",
                        unit_price_04: "26.4",
                        product_service_id_qualifier_06:
                          "buyers_item_number_IN",
                        product_service_id_07: "579069928",
                        product_service_id_qualifier_08: "ucc_12_UP",
                        product_service_id_09: "869657000074",
                        product_service_id_qualifier_16:
                          "gtin_14_digit_data_structure_UK",
                        product_service_id_17: "00869657000074",
                        product_service_id_qualifier_22:
                          "vendors_sellers_item_number_VN",
                        product_service_id_23: "NG_EF_CN12",
                      },
                      item_physical_details_PO4: {
                        pack_01: "24",
                        inner_pack_14: "1",
                      },
                    },
                  ],
                },
                summary: {
                  total_monetary_value_summary_TDS: {
                    amount_01: 627.26,
                  },
                  service_promotion_allowance_or_charge_information_SAC_loop: [
                    {
                      service_promotion_allowance_or_charge_information_SAC: {
                        allowance_or_charge_indicator_01: "allowance_A",
                        service_promotion_allowance_or_charge_code_02:
                          "warehouse_I570",
                        amount_05: 6.34,
                        allowance_charge_percent_qualifier_06:
                          "base_price_amount_6",
                        percent_decimal_format_07: "1.0",
                        allowance_or_charge_method_of_handling_code_12:
                          "off_invoice_02",
                      },
                    },
                  ],
                  invoice_shipment_summary_ISS_loop: [
                    {
                      invoice_shipment_summary_ISS: {
                        number_of_units_shipped_01: "24",
                        unit_or_basis_for_measurement_code_02: "each_EA",
                      },
                    },
                  ],
                  transaction_totals_CTT: {
                    number_of_line_items_01: "1",
                  },
                  transaction_set_trailer_SE: {
                    number_of_included_segments_01: "18",
                    transaction_set_control_number_02: "11061",
                  },
                },
                set: "810",
              },
            ],
            functional_group_trailer_GE: {
              number_of_transaction_sets_included_01: "1",
              group_control_number_02: "11061",
            },
            release: "005010",
          },
        ],
        interchange_control_trailer_IEA: {
          number_of_included_functional_groups_01: "1",
          interchange_control_number_02: "110000061",
        },
        delimiters: {
          element: "*",
          segment: "~",
          sub_element: ">",
          repetition: ":",
        },
      },
    ],
    __version: "jedi@2.0",
  },
  targetJsonSchema: {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    type: "object",
    properties: {
      interchanges: {
        type: "array",
        items: {
          type: "object",
          properties: {
            interchange_control_header_ISA: {
              type: "object",
              properties: {
                authorization_information_qualifier_01: {
                  type: "string",
                },
                authorization_information_02: {
                  type: "string",
                },
                security_information_qualifier_03: {
                  type: "string",
                },
                security_information_04: {
                  type: "string",
                },
                interchange_id_qualifier_05: {
                  type: "string",
                },
                interchange_sender_id_06: {
                  type: "string",
                },
                interchange_id_qualifier_07: {
                  type: "string",
                },
                interchange_receiver_id_08: {
                  type: "string",
                },
                interchange_date_09: {
                  type: "string",
                },
                interchange_time_10: {
                  type: "string",
                },
                repetition_separator_11: {
                  type: "string",
                },
                interchange_control_version_number_12: {
                  type: "string",
                },
                interchange_control_number_13: {
                  type: "string",
                },
                acknowledgment_requested_14: {
                  type: "string",
                },
                interchange_usage_indicator_15: {
                  type: "string",
                },
                component_element_separator_16: {
                  type: "string",
                },
              },
            },
            groups: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  functional_group_header_GS: {
                    type: "object",
                    properties: {
                      functional_identifier_code_01: {
                        type: "string",
                      },
                      application_senders_code_02: {
                        type: "string",
                      },
                      application_receivers_code_03: {
                        type: "string",
                      },
                      date_04: {
                        type: "string",
                      },
                      time_05: {
                        type: "string",
                      },
                      group_control_number_06: {
                        type: "string",
                      },
                      responsible_agency_code_07: {
                        type: "string",
                      },
                      version_release_industry_identifier_code_08: {
                        type: "string",
                      },
                    },
                  },
                  transaction_sets: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        heading: {
                          type: "object",
                          properties: {
                            transaction_set_header_ST: {
                              type: "object",
                              properties: {
                                transaction_set_identifier_code_01: {
                                  type: "string",
                                },
                                transaction_set_control_number_02: {
                                  type: "string",
                                },
                              },
                            },
                            beginning_segment_for_invoice_BIG: {
                              type: "object",
                              properties: {
                                date_01: {
                                  type: "string",
                                },
                                invoice_number_02: {
                                  type: "string",
                                },
                                date_03: {
                                  type: "string",
                                },
                                purchase_order_number_04: {
                                  type: "string",
                                },
                              },
                            },
                            reference_information_REF: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  reference_identification_qualifier_01: {
                                    type: "string",
                                  },
                                  reference_identification_02: {
                                    type: "string",
                                  },
                                },
                              },
                            },
                            party_identification_N1_loop: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  party_identification_N1: {
                                    type: "object",
                                    properties: {
                                      entity_identifier_code_01: {
                                        type: "string",
                                      },
                                      name_02: {
                                        type: "string",
                                      },
                                      identification_code_qualifier_03: {
                                        type: "string",
                                      },
                                      identification_code_04: {
                                        type: "string",
                                      },
                                    },
                                  },
                                  party_location_N3: {
                                    type: "array",
                                    items: {
                                      type: "object",
                                      properties: {
                                        address_information_01: {
                                          type: "string",
                                        },
                                        address_information_02: {
                                          type: "string",
                                        },
                                      },
                                    },
                                  },
                                  geographic_location_N4: {
                                    type: "object",
                                    properties: {
                                      city_name_01: {
                                        type: "string",
                                      },
                                      state_or_province_code_02: {
                                        type: "string",
                                      },
                                      postal_code_03: {
                                        type: "string",
                                      },
                                      country_code_04: {
                                        type: "string",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            terms_of_sale_deferred_terms_of_sale_ITD: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  terms_type_code_01: {
                                    type: "string",
                                  },
                                  terms_basis_date_code_02: {
                                    type: "string",
                                  },
                                  terms_discount_percent_03: {
                                    type: "string",
                                  },
                                  terms_discount_days_due_05: {
                                    type: "string",
                                  },
                                  terms_net_days_07: {
                                    type: "string",
                                  },
                                },
                              },
                            },
                            date_time_reference_DTM: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  date_time_qualifier_01: {
                                    type: "string",
                                  },
                                  date_02: {
                                    type: "string",
                                  },
                                },
                              },
                            },
                            fob_related_instructions_FOB: {
                              type: "object",
                              properties: {
                                shipment_method_of_payment_01: {
                                  type: "string",
                                },
                              },
                            },
                          },
                        },
                        detail: {
                          type: "object",
                          properties: {
                            baseline_item_data_invoice_IT1_loop: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  baseline_item_data_invoice_IT1: {
                                    type: "object",
                                    properties: {
                                      quantity_invoiced_02: {
                                        type: "string",
                                      },
                                      unit_or_basis_for_measurement_code_03: {
                                        type: "string",
                                      },
                                      unit_price_04: {
                                        type: "string",
                                      },
                                      product_service_id_qualifier_06: {
                                        type: "string",
                                      },
                                      product_service_id_07: {
                                        type: "string",
                                      },
                                      product_service_id_qualifier_08: {
                                        type: "string",
                                      },
                                      product_service_id_09: {
                                        type: "string",
                                      },
                                      product_service_id_qualifier_16: {
                                        type: "string",
                                      },
                                      product_service_id_17: {
                                        type: "string",
                                      },
                                      product_service_id_qualifier_22: {
                                        type: "string",
                                      },
                                      product_service_id_23: {
                                        type: "string",
                                      },
                                    },
                                  },
                                  item_physical_details_PO4: {
                                    type: "object",
                                    properties: {
                                      pack_01: {
                                        type: "string",
                                      },
                                      inner_pack_14: {
                                        type: "string",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                        summary: {
                          type: "object",
                          properties: {
                            total_monetary_value_summary_TDS: {
                              type: "object",
                              properties: {
                                amount_01: {
                                  type: "number",
                                },
                              },
                            },
                            service_promotion_allowance_or_charge_information_SAC_loop:
                              {
                                type: "array",
                                items: {
                                  type: "object",
                                  properties: {
                                    service_promotion_allowance_or_charge_information_SAC:
                                      {
                                        type: "object",
                                        properties: {
                                          allowance_or_charge_indicator_01: {
                                            type: "string",
                                          },
                                          service_promotion_allowance_or_charge_code_02:
                                            {
                                              type: "string",
                                            },
                                          amount_05: {
                                            type: "number",
                                          },
                                          allowance_charge_percent_qualifier_06:
                                            {
                                              type: "string",
                                            },
                                          percent_decimal_format_07: {
                                            type: "string",
                                          },
                                          allowance_or_charge_method_of_handling_code_12:
                                            {
                                              type: "string",
                                            },
                                        },
                                      },
                                  },
                                },
                              },
                            invoice_shipment_summary_ISS_loop: {
                              type: "array",
                              items: {
                                type: "object",
                                properties: {
                                  invoice_shipment_summary_ISS: {
                                    type: "object",
                                    properties: {
                                      number_of_units_shipped_01: {
                                        type: "string",
                                      },
                                      unit_or_basis_for_measurement_code_02: {
                                        type: "string",
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            transaction_totals_CTT: {
                              type: "object",
                              properties: {
                                number_of_line_items_01: {
                                  type: "string",
                                },
                              },
                            },
                            transaction_set_trailer_SE: {
                              type: "object",
                              properties: {
                                number_of_included_segments_01: {
                                  type: "string",
                                },
                                transaction_set_control_number_02: {
                                  type: "string",
                                },
                              },
                            },
                          },
                        },
                        set: {
                          type: "string",
                        },
                      },
                    },
                  },
                  functional_group_trailer_GE: {
                    type: "object",
                    properties: {
                      number_of_transaction_sets_included_01: {
                        type: "string",
                      },
                      group_control_number_02: {
                        type: "string",
                      },
                    },
                  },
                  release: {
                    type: "string",
                  },
                },
              },
            },
            interchange_control_trailer_IEA: {
              type: "object",
              properties: {
                number_of_included_functional_groups_01: {
                  type: "string",
                },
                interchange_control_number_02: {
                  type: "string",
                },
              },
            },
            delimiters: {
              type: "object",
              properties: {
                element: {
                  type: "string",
                },
                segment: {
                  type: "string",
                },
                sub_element: {
                  type: "string",
                },
                repetition: {
                  type: "string",
                },
              },
            },
          },
        },
      },
      __version: {
        type: "string",
      },
    },
    examples: [
      {
        interchanges: [
          {
            interchange_control_header_ISA: {
              authorization_information_qualifier_01:
                "no_authorization_information_present_no_meaningful_information_in_i02_00",
              authorization_information_02: "",
              security_information_qualifier_03:
                "no_security_information_present_no_meaningful_information_in_i04_00",
              security_information_04: "",
              interchange_id_qualifier_05: "mutually_defined_ZZ",
              interchange_sender_id_06: "36223376",
              interchange_id_qualifier_07:
                "ucc_edi_communications_id_comm_id_08",
              interchange_receiver_id_08: "925485US00",
              interchange_date_09: "221129",
              interchange_time_10: "1457",
              repetition_separator_11: ":",
              interchange_control_version_number_12: "00501",
              interchange_control_number_13: "110000061",
              acknowledgment_requested_14:
                "no_interchange_acknowledgment_requested_0",
              interchange_usage_indicator_15: "production_data_P",
              component_element_separator_16: ">",
            },
            groups: [
              {
                functional_group_header_GS: {
                  functional_identifier_code_01: "invoice_information_810_IN",
                  application_senders_code_02: "36223376",
                  application_receivers_code_03: "925485US00",
                  date_04: "20221129",
                  time_05: "1457",
                  group_control_number_06: "11061",
                  responsible_agency_code_07:
                    "accredited_standards_committee_x12_X",
                  version_release_industry_identifier_code_08: "005010",
                },
                transaction_sets: [
                  {
                    heading: {
                      transaction_set_header_ST: {
                        transaction_set_identifier_code_01: "810",
                        transaction_set_control_number_02: "11061",
                      },
                      beginning_segment_for_invoice_BIG: {
                        date_01: "20221129",
                        invoice_number_02: "NEURO- 1422",
                        date_03: "20221027",
                        purchase_order_number_04: "3625977383",
                      },
                      reference_information_REF: [
                        {
                          reference_identification_qualifier_01:
                            "department_number_DP",
                          reference_identification_02: "00040",
                        },
                        {
                          reference_identification_qualifier_01:
                            "internal_vendor_number_IA",
                          reference_identification_02: "066101400",
                        },
                        {
                          reference_identification_qualifier_01:
                            "merchandise_type_code_MR",
                          reference_identification_02: "0020",
                        },
                      ],
                      party_identification_N1_loop: [
                        {
                          party_identification_N1: {
                            entity_identifier_code_01:
                              "supplier_manufacturer_SU",
                            name_02: "NEUROGUM, INC.",
                          },
                        },
                        {
                          party_identification_N1: {
                            entity_identifier_code_01: "ship_to_ST",
                            name_02: "NV1 HVFC WHSE MACARRAN NV",
                            identification_code_qualifier_03:
                              "global_location_number_gln_UL",
                            identification_code_04: "0078742100692",
                          },
                          party_location_N3: [
                            {
                              address_information_01: "235 EAST SYDNEY DRIVE",
                              address_information_02: "9204",
                            },
                          ],
                          geographic_location_N4: {
                            city_name_01: "SPARKS",
                            state_or_province_code_02: "NV",
                            postal_code_03: "89434",
                            country_code_04: "US",
                          },
                        },
                      ],
                      terms_of_sale_deferred_terms_of_sale_ITD: [
                        {
                          terms_type_code_01: "basic_discount_offered_08",
                          terms_basis_date_code_02: "receipt_of_goods_15",
                          terms_discount_percent_03: "2",
                          terms_discount_days_due_05: "40",
                          terms_net_days_07: "41",
                        },
                      ],
                      date_time_reference_DTM: [
                        {
                          date_time_qualifier_01: "shipped_011",
                          date_02: "20221122",
                        },
                      ],
                      fob_related_instructions_FOB: {
                        shipment_method_of_payment_01: "collect_CC",
                      },
                    },
                    detail: {
                      baseline_item_data_invoice_IT1_loop: [
                        {
                          baseline_item_data_invoice_IT1: {
                            quantity_invoiced_02: "24.0",
                            unit_or_basis_for_measurement_code_03: "each_EA",
                            unit_price_04: "26.4",
                            product_service_id_qualifier_06:
                              "buyers_item_number_IN",
                            product_service_id_07: "579069928",
                            product_service_id_qualifier_08: "ucc_12_UP",
                            product_service_id_09: "869657000074",
                            product_service_id_qualifier_16:
                              "gtin_14_digit_data_structure_UK",
                            product_service_id_17: "00869657000074",
                            product_service_id_qualifier_22:
                              "vendors_sellers_item_number_VN",
                            product_service_id_23: "NG_EF_CN12",
                          },
                          item_physical_details_PO4: {
                            pack_01: "24",
                            inner_pack_14: "1",
                          },
                        },
                      ],
                    },
                    summary: {
                      total_monetary_value_summary_TDS: {
                        amount_01: 627.26,
                      },
                      service_promotion_allowance_or_charge_information_SAC_loop:
                        [
                          {
                            service_promotion_allowance_or_charge_information_SAC:
                              {
                                allowance_or_charge_indicator_01: "allowance_A",
                                service_promotion_allowance_or_charge_code_02:
                                  "warehouse_I570",
                                amount_05: 6.34,
                                allowance_charge_percent_qualifier_06:
                                  "base_price_amount_6",
                                percent_decimal_format_07: "1.0",
                                allowance_or_charge_method_of_handling_code_12:
                                  "off_invoice_02",
                              },
                          },
                        ],
                      invoice_shipment_summary_ISS_loop: [
                        {
                          invoice_shipment_summary_ISS: {
                            number_of_units_shipped_01: "24",
                            unit_or_basis_for_measurement_code_02: "each_EA",
                          },
                        },
                      ],
                      transaction_totals_CTT: {
                        number_of_line_items_01: "1",
                      },
                      transaction_set_trailer_SE: {
                        number_of_included_segments_01: "18",
                        transaction_set_control_number_02: "11061",
                      },
                    },
                    set: "810",
                  },
                ],
                functional_group_trailer_GE: {
                  number_of_transaction_sets_included_01: "1",
                  group_control_number_02: "11061",
                },
                release: "005010",
              },
            ],
            interchange_control_trailer_IEA: {
              number_of_included_functional_groups_01: "1",
              interchange_control_number_02: "110000061",
            },
            delimiters: {
              element: "*",
              segment: "~",
              sub_element: ">",
              repetition: ":",
            },
          },
        ],
        __version: "jedi@2.0",
      },
    ],
  },
};

export const Mapping =
  '{\n  "interchanges": (\n    $__TYPE__ := "LIST_CONTEXT_BLOCK";\n    $__CONTEXT__ := $$.DOC_850[0].interchanges;\n    $__CONTEXT__ = $omitField\n      ? $omitField\n      : $$\n        .DOC_850[0]\n        .interchanges\n        .{\n          "interchange_control_header_ISA": (\n            $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n            $__CONTEXT__ := interchange_control_header_ISA;\n            $__CONTEXT__ = $omitField\n              ? $omitField\n              : $__CONTEXT__\n                .{\n                  "authorization_information_qualifier_01": $reverse($split(authorization_information_qualifier_01, "_"))[0],\n                  "authorization_information_02": authorization_information_02,\n                  "security_information_qualifier_03": $reverse($split(authorization_information_qualifier_01, "_"))[0],\n                  "security_information_04": security_information_04,\n                  "interchange_id_qualifier_05": $reverse($split(interchange_id_qualifier_07, "_"))[0],\n                  "interchange_sender_id_06": interchange_receiver_id_08,\n                  "interchange_id_qualifier_07": $reverse($split(interchange_id_qualifier_05, "_"))[0],\n                  "interchange_receiver_id_08": interchange_sender_id_06,\n                  "interchange_date_09": $convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.EDIDate),\n                  "interchange_time_10": $convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.EDITime),\n                  "repetition_separator_11": repetition_separator_11,\n                  "interchange_control_version_number_12": interchange_control_version_number_12,\n                  "interchange_control_number_13": undefined,\n                  "acknowledgment_requested_14": $reverse($split(acknowledgment_requested_14, "_"))[0],\n                  "interchange_usage_indicator_15": $reverse($split(interchange_usage_indicator_15, "_"))[0],\n                  "component_element_separator_16": component_element_separator_16\n                }\n          ),\n          "groups": (\n            $__TYPE__ := "LIST_CONTEXT_BLOCK";\n            $__CONTEXT__ := groups;\n            $__CONTEXT__ = $omitField\n              ? $omitField\n              : groups\n                .{\n                  "functional_group_header_GS": (\n                    $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n                    $__CONTEXT__ := functional_group_header_GS;\n                    $__CONTEXT__ = $omitField\n                      ? $omitField\n                      : $__CONTEXT__\n                        .{\n                          "functional_identifier_code_01": "IN",\n                          "application_senders_code_02": application_receivers_code_03,\n                          "application_receivers_code_03": application_senders_code_02,\n                          "date_04": $convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.$dateTime.EDIDateLong),\n                          "time_05": $convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.EDITime),\n                          "group_control_number_06": undefined,\n                          "responsible_agency_code_07": $reverse($split(responsible_agency_code_07, "_"))[0],\n                          "version_release_industry_identifier_code_08": version_release_industry_identifier_code_08\n                        }\n                  ),\n                  "transaction_sets": (\n                    $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                    $__CONTEXT__ := transaction_sets;\n                    $__CONTEXT__ = $omitField\n                      ? $omitField\n                      : transaction_sets\n                        .{\n                          "heading": {\n                            "transaction_set_header_ST": {\n                              "transaction_set_identifier_code_01": "810",\n                              "transaction_set_control_number_02": undefined\n                            },\n                            "beginning_segment_for_invoice_BIG": {\n                              "date_01": $join(\n                                [\n                                  $substring($convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.$dateTime.EDIDateLong), 0, 4),\n                                  $substring($convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.$dateTime.EDIDateLong), 4, 2),\n                                  $substring($convertDateTime($now(), $dateTime.RFC3339Millis, $dateTime.$dateTime.$dateTime.EDIDateLong), 6, 2)\n                                ],\n                                "-"\n                              ),\n                              "invoice_number_02": $join(["INV", $substring($string($random() * $millis()), 2, 7)]),\n                              "date_03": $join(\n                                [\n                                  $substring(heading.beginning_segment_for_purchase_order_BEG.date_05, 0, 4),\n                                  $substring(heading.beginning_segment_for_purchase_order_BEG.date_05, 4, 2),\n                                  $substring(heading.beginning_segment_for_purchase_order_BEG.date_05, 6, 2)\n                                ],\n                                "-"\n                              ),\n                              "purchase_order_number_04": heading.beginning_segment_for_purchase_order_BEG.purchase_order_number_03\n                            },\n                            "reference_information_REF": (\n                              $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                              $__CONTEXT__ := [\n                                {\n                                  "qualifier": "DP",\n                                  "value": $\n                                    .heading\n                                    .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "DP"]\n                                    .reference_identification_02\n                                },\n                                {\n                                  "qualifier": "IA",\n                                  "value": $\n                                    .heading\n                                    .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "IA"]\n                                    .reference_identification_02\n                                },\n                                {\n                                  "qualifier": "MR",\n                                  "value": $\n                                    .heading\n                                    .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "MR"]\n                                    .reference_identification_02\n                                }\n                              ];\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : ([\n                                  {\n                                    "qualifier": "DP",\n                                    "value": $\n                                      .heading\n                                      .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "DP"]\n                                      .reference_identification_02\n                                  },\n                                  {\n                                    "qualifier": "IA",\n                                    "value": $\n                                      .heading\n                                      .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "IA"]\n                                      .reference_identification_02\n                                  },\n                                  {\n                                    "qualifier": "MR",\n                                    "value": $\n                                      .heading\n                                      .reference_information_REF[reference_identification_qualifier_01.$split("_")[-1] = "MR"]\n                                      .reference_identification_02\n                                  }\n                                ])\n                                  .{ "reference_identification_qualifier_01": qualifier, "reference_identification_02": value }[]\n                            ),\n                            "party_identification_N1_loop": (\n                              $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                              $__CONTEXT__ := heading.party_identification_N1_loop;\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : heading\n                                  .party_identification_N1_loop\n                                  .{\n                                    "party_identification_N1": {\n                                      "entity_identifier_code_01": $reverse($split(party_identification_N1.entity_identifier_code_01, "_"))[0] = "BY"\n                                        ? "ST"\n                                        : $reverse($split(party_identification_N1.entity_identifier_code_01, "_"))[0],\n                                      "name_02": party_identification_N1.name_02,\n                                      "identification_code_qualifier_03": $reverse($split(\n                                        party_identification_N1.identification_code_qualifier_03,\n                                        "_"\n                                      ))[0],\n                                      "identification_code_04": party_identification_N1.identification_code_04\n                                    },\n                                    "party_location_N3": (\n                                      $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                                      $__CONTEXT__ := party_location_N3;\n                                      $__CONTEXT__ = $omitField\n                                        ? $omitField\n                                        : party_location_N3\n                                          .{ "address_information_01": address_information_01, "address_information_02": address_information_02 }[]\n                                    ),\n                                    "geographic_location_N4": {\n                                      "city_name_01": geographic_location_N4[0].city_name_01,\n                                      "state_or_province_code_02": geographic_location_N4[0].state_or_province_code_02,\n                                      "postal_code_03": geographic_location_N4[0].postal_code_03,\n                                      "country_code_04": geographic_location_N4[0].country_code_04\n                                    }\n                                  }[]\n                            ),\n                            "terms_of_sale_deferred_terms_of_sale_ITD": (\n                              $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                              $__CONTEXT__ := heading.terms_of_sale_deferred_terms_of_sale_ITD;\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : heading\n                                  .terms_of_sale_deferred_terms_of_sale_ITD\n                                  .{\n                                    "terms_type_code_01": $reverse($split(terms_type_code_01, "_"))[0],\n                                    "terms_basis_date_code_02": $reverse($split(terms_basis_date_code_02, "_"))[0],\n                                    "terms_discount_percent_03": terms_discount_percent_03,\n                                    "terms_discount_days_due_05": terms_discount_days_due_05,\n                                    "terms_net_days_07": terms_net_days_07\n                                  }[]\n                            ),\n                            "date_time_reference_DTM": (\n                              $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                              $__CONTEXT__ := $$\n                                .DOC_856[0]\n                                .interchanges[0]\n                                .groups[0]\n                                .transaction_sets[0]\n                                .detail\n                                .HL_loop_shipment[0]\n                                .date_time_reference_DTM[date_time_qualifier_01.$split("_")[-1] = "011"];\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : $$\n                                  .DOC_856[0]\n                                  .interchanges[0]\n                                  .groups[0]\n                                  .transaction_sets[0]\n                                  .detail\n                                  .HL_loop_shipment[0]\n                                  .date_time_reference_DTM[date_time_qualifier_01.$split("_")[-1] = "011"]\n                                  .{ "date_time_qualifier_01": date_time_qualifier_01.$split("_")[-1], "date_02": date_02 }[]\n                            ),\n                            "fob_related_instructions_FOB": (\n                              $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n                              $__CONTEXT__ := $$\n                                .DOC_856[0]\n                                .interchanges[0]\n                                .groups[0]\n                                .transaction_sets[0]\n                                .detail\n                                .HL_loop_shipment[0]\n                                .fob_related_instructions_FOB;\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : $__CONTEXT__.{ "shipment_method_of_payment_01": shipment_method_of_payment_01.$split("_")[-1] }\n                            )\n                          },\n                          "detail": (\n                            $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n                            $__CONTEXT__ := detail;\n                            $__CONTEXT__ = $omitField\n                              ? $omitField\n                              : $__CONTEXT__\n                                .{\n                                  "baseline_item_data_invoice_IT1_loop": (\n                                    $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                                    $__CONTEXT__ := (\n                                      $lineItems := $distinct($$\n                                        .DOC_856[0]\n                                        .interchanges[0]\n                                        .groups[0]\n                                        .transaction_sets[0]\n                                        .detail\n                                        .HL_loop_shipment[0]\n                                        .HL_loop_order[0]\n                                        .HL_loop_pack\n                                        .HL_loop_item\n                                        .item_identification_LIN\n                                        .product_service_id_03);\n                                      $lineItems2 := $distinct($$\n                                        .DOC_856[0]\n                                        .interchanges[0]\n                                        .groups[0]\n                                        .transaction_sets[0]\n                                        .detail\n                                        .HL_loop_shipment[0]\n                                        .HL_loop_order[0]\n                                        .HL_loop_pack\n                                        .HL_loop_item\n                                        .item_identification_LIN\n                                        .product_service_id_05);\n                                      $lineItems3 := $distinct($$\n                                        .DOC_856[0]\n                                        .interchanges[0]\n                                        .groups[0]\n                                        .transaction_sets[0]\n                                        .detail\n                                        .HL_loop_shipment[0]\n                                        .HL_loop_order[0]\n                                        .HL_loop_pack\n                                        .HL_loop_item\n                                        .item_identification_LIN\n                                        .product_service_id_07);\n                                      $lineItems4 := $distinct($$\n                                        .DOC_856[0]\n                                        .interchanges[0]\n                                        .groups[0]\n                                        .transaction_sets[0]\n                                        .detail\n                                        .HL_loop_shipment[0]\n                                        .HL_loop_order[0]\n                                        .HL_loop_pack\n                                        .HL_loop_item\n                                        .item_identification_LIN\n                                        .product_service_id_09);\n                                      $lineItems5 := $distinct($$\n                                        .DOC_856[0]\n                                        .interchanges[0]\n                                        .groups[0]\n                                        .transaction_sets[0]\n                                        .detail\n                                        .HL_loop_shipment[0]\n                                        .HL_loop_order[0]\n                                        .HL_loop_pack\n                                        .HL_loop_item\n                                        .item_identification_LIN\n                                        .product_service_id_11);\n                                      $filter(\n                                        $.baseline_item_data_PO1_loop,\n                                        function($v) {\n                                          $v.baseline_item_data_PO1.product_service_id_07\n                                            in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                            or $v.baseline_item_data_PO1.product_service_id_09\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                            or $v.baseline_item_data_PO1.product_service_id_11\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                            or $v.baseline_item_data_PO1.product_service_id_13\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                            or $v.baseline_item_data_PO1.product_service_id_15\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                            or $v.baseline_item_data_PO1.product_service_id_23\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                        }\n                                      )\n                                    );\n                                    $__CONTEXT__ = $omitField\n                                      ? $omitField\n                                      : (\n                                        $lineItems := $distinct($$\n                                          .DOC_856[0]\n                                          .interchanges[0]\n                                          .groups[0]\n                                          .transaction_sets[0]\n                                          .detail\n                                          .HL_loop_shipment[0]\n                                          .HL_loop_order[0]\n                                          .HL_loop_pack\n                                          .HL_loop_item\n                                          .item_identification_LIN\n                                          .product_service_id_03);\n                                        $lineItems2 := $distinct($$\n                                          .DOC_856[0]\n                                          .interchanges[0]\n                                          .groups[0]\n                                          .transaction_sets[0]\n                                          .detail\n                                          .HL_loop_shipment[0]\n                                          .HL_loop_order[0]\n                                          .HL_loop_pack\n                                          .HL_loop_item\n                                          .item_identification_LIN\n                                          .product_service_id_05);\n                                        $lineItems3 := $distinct($$\n                                          .DOC_856[0]\n                                          .interchanges[0]\n                                          .groups[0]\n                                          .transaction_sets[0]\n                                          .detail\n                                          .HL_loop_shipment[0]\n                                          .HL_loop_order[0]\n                                          .HL_loop_pack\n                                          .HL_loop_item\n                                          .item_identification_LIN\n                                          .product_service_id_07);\n                                        $lineItems4 := $distinct($$\n                                          .DOC_856[0]\n                                          .interchanges[0]\n                                          .groups[0]\n                                          .transaction_sets[0]\n                                          .detail\n                                          .HL_loop_shipment[0]\n                                          .HL_loop_order[0]\n                                          .HL_loop_pack\n                                          .HL_loop_item\n                                          .item_identification_LIN\n                                          .product_service_id_09);\n                                        $lineItems5 := $distinct($$\n                                          .DOC_856[0]\n                                          .interchanges[0]\n                                          .groups[0]\n                                          .transaction_sets[0]\n                                          .detail\n                                          .HL_loop_shipment[0]\n                                          .HL_loop_order[0]\n                                          .HL_loop_pack\n                                          .HL_loop_item\n                                          .item_identification_LIN\n                                          .product_service_id_11);\n                                        $filter(\n                                          $.baseline_item_data_PO1_loop,\n                                          function($v) {\n                                            $v.baseline_item_data_PO1.product_service_id_07\n                                              in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                              or $v.baseline_item_data_PO1.product_service_id_09\n                                                in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                              or $v.baseline_item_data_PO1.product_service_id_11\n                                                in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                              or $v.baseline_item_data_PO1.product_service_id_13\n                                                in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                              or $v.baseline_item_data_PO1.product_service_id_15\n                                                in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                              or $v.baseline_item_data_PO1.product_service_id_23\n                                                in [$lineItems, $lineItems2, $lineItems3, $lineItems4, $lineItems5]\n                                          }\n                                        )\n                                      )\n                                        .{\n                                          "baseline_item_data_invoice_IT1": {\n                                            "quantity_invoiced_02": (\n                                              $currentItemId := $.baseline_item_data_PO1.product_service_id_07;\n                                              $currentItemId2 := $.baseline_item_data_PO1.product_service_id_09;\n                                              $currentItemId3 := $.baseline_item_data_PO1.product_service_id_11;\n                                              $currentItemId4 := $.baseline_item_data_PO1.product_service_id_13;\n                                              $currentItemId5 := $.baseline_item_data_PO1.product_service_id_15;\n                                              $filter(\n                                                $$\n                                                  .DOC_856[0]\n                                                  .interchanges[0]\n                                                  .groups[0]\n                                                  .transaction_sets[0]\n                                                  .detail\n                                                  .HL_loop_shipment[0]\n                                                  .HL_loop_order\n                                                  .HL_loop_pack\n                                                  .HL_loop_item,\n                                                function($v) {\n                                                  $v.item_identification_LIN.product_service_id_03\n                                                    in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                    or $v.item_identification_LIN.product_service_id_05\n                                                      in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                    or $v.item_identification_LIN.product_service_id_07\n                                                      in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                    or $v.item_identification_LIN.product_service_id_09\n                                                      in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                    or $v.item_identification_LIN.product_service_id_11\n                                                      in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                    or $v.item_identification_LIN.product_service_id_23\n                                                      in [$currentItemId, $currentItemId2, $currentItemId3, $currentItemId4, $currentItemId5]\n                                                }\n                                              )\n                                                ~> function($v) {\n                                                  $map($v, function($v1) { $number($v1.item_detail_shipment_SN1.number_of_units_shipped_02) }) ~> $sum\n                                                    ~> $string()\n                                                }\n                                            ),\n                                            "unit_or_basis_for_measurement_code_03": baseline_item_data_PO1\n                                              .unit_or_basis_for_measurement_code_03\n                                              .$split("_")[-1],\n                                            "unit_price_04": baseline_item_data_PO1.unit_price_04,\n                                            "product_service_id_qualifier_06": $reverse($split(\n                                              baseline_item_data_PO1.product_service_id_qualifier_06,\n                                              "_"\n                                            ))[0],\n                                            "product_service_id_07": baseline_item_data_PO1.product_service_id_07,\n                                            "product_service_id_qualifier_08": $reverse($split(\n                                              baseline_item_data_PO1.product_service_id_qualifier_08,\n                                              "_"\n                                            ))[0],\n                                            "product_service_id_09": baseline_item_data_PO1.product_service_id_09,\n                                            "product_service_id_qualifier_16": $reverse($split(\n                                              baseline_item_data_PO1.product_service_id_qualifier_22,\n                                              "_"\n                                            ))[0],\n                                            "product_service_id_17": baseline_item_data_PO1.product_service_id_23,\n                                            "product_service_id_qualifier_22": $reverse($split(\n                                              baseline_item_data_PO1.product_service_id_qualifier_10,\n                                              "_"\n                                            ))[0],\n                                            "product_service_id_23": baseline_item_data_PO1.product_service_id_11\n                                          },\n                                          "item_physical_details_PO4": (\n                                            $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n                                            $__CONTEXT__ := item_physical_details_PO4;\n                                            $__CONTEXT__ = $omitField\n                                              ? $omitField\n                                              : $__CONTEXT__.{ "pack_01": pack_01, "inner_pack_14": inner_pack_14 }\n                                          )\n                                        }[]\n                                  )\n                                }\n                          ),\n                          "summary": {\n                            "total_monetary_value_summary_TDS": {\n                              "amount_01": (\n                                $allowances := $filter(\n                                  heading.service_promotion_allowance_or_charge_information_SAC_loop,\n                                  function($v) {\n                                    $reverse($split($v.service_promotion_allowance_or_charge_information_SAC.allowance_or_charge_indicator_01, "_"))[\n                                      0\n                                    ]\n                                      = "A"\n                                  }\n                                );\n                                $total_allowance_amount := $reduce(\n                                  $allowances,\n                                  function($acc, $v) { $acc + $number($v.service_promotion_allowance_or_charge_information_SAC.amount_05) },\n                                  0\n                                );\n                                $count($allowances) > 0\n                                  ? $round(\n                                    (($number(summary.transaction_totals_CTT_loop[0].monetary_amount_information_AMT.monetary_amount_02))\n                                      - $total_allowance_amount),\n                                    2\n                                  )\n                                  : ($val := ($number(summary.transaction_totals_CTT_loop[0].monetary_amount_information_AMT.monetary_amount_02)))\n                              )\n                            },\n                            "service_promotion_allowance_or_charge_information_SAC_loop": (\n                              $__TYPE__ := "LIST_CONTEXT_BLOCK";\n                              $__CONTEXT__ := heading.service_promotion_allowance_or_charge_information_SAC_loop;\n                              $__CONTEXT__ = $omitField\n                                ? $omitField\n                                : heading\n                                  .service_promotion_allowance_or_charge_information_SAC_loop\n                                  .{\n                                    "service_promotion_allowance_or_charge_information_SAC": {\n                                      "allowance_or_charge_indicator_01": $reverse($split(\n                                        service_promotion_allowance_or_charge_information_SAC.allowance_or_charge_indicator_01,\n                                        "_"\n                                      ))[0],\n                                      "service_promotion_allowance_or_charge_code_02": $reverse($split(\n                                        service_promotion_allowance_or_charge_information_SAC.service_promotion_allowance_or_charge_code_02,\n                                        "_"\n                                      ))[0],\n                                      "amount_05": $number(service_promotion_allowance_or_charge_information_SAC.amount_05),\n                                      "allowance_charge_percent_qualifier_06": $reverse($split(\n                                        service_promotion_allowance_or_charge_information_SAC.allowance_charge_percent_qualifier_06,\n                                        "_"\n                                      ))[0],\n                                      "percent_decimal_format_07": service_promotion_allowance_or_charge_information_SAC.percent_decimal_format_07,\n                                      "allowance_or_charge_method_of_handling_code_12": $reverse($split(\n                                        service_promotion_allowance_or_charge_information_SAC.allowance_or_charge_method_of_handling_code_12,\n                                        "_"\n                                      ))[0]\n                                    }\n                                  }[]\n                            ),\n                            "invoice_shipment_summary_ISS_loop": [\n                              {\n                                "invoice_shipment_summary_ISS": {\n                                  "number_of_units_shipped_01": undefined,\n                                  "unit_or_basis_for_measurement_code_02": undefined\n                                }\n                              }\n                            ],\n                            "transaction_totals_CTT": { "number_of_line_items_01": undefined },\n                            "transaction_set_trailer_SE": {\n                              "number_of_included_segments_01": undefined,\n                              "transaction_set_control_number_02": undefined\n                            }\n                          },\n                          "set": undefined\n                        }[]\n                  ),\n                  "functional_group_trailer_GE": {\n                    "number_of_transaction_sets_included_01": functional_group_trailer_GE.number_of_transaction_sets_included_01,\n                    "group_control_number_02": undefined\n                  },\n                  "release": $.release\n                }[]\n          ),\n          "interchange_control_trailer_IEA": {\n            "number_of_included_functional_groups_01": interchange_control_trailer_IEA.number_of_included_functional_groups_01,\n            "interchange_control_number_02": undefined\n          },\n          "delimiters": (\n            $__TYPE__ := "OBJECT_UNARY_CONTEXT_BLOCK";\n            $__CONTEXT__ := $.delimiters;\n            $__CONTEXT__ = $omitField\n              ? $omitField\n              : $__CONTEXT__.{ "element": element, "segment": segment, "sub_element": sub_element, "repetition": repetition }\n          )\n        }[]\n  ),\n  "__version": $$.DOC_850[0].__version\n}';
