import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xa9ce1dccd4c08ae2294b4b2e43bc61e93863a7ca909ef9b5b299a6c261fa0e2b",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.72.1",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "3.2.0",
      "rust_toolchain": "stable-x86_64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "az_safe_send",
    "version": "0.1.0",
    "authors": [
      "btn.group"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "fee",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "label": "azero_id_router_address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 6
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 1
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 0
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 4
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 23
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 22
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 19
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "token_address",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 14
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "fee",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "memo",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "recipient_azero_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "sender_azero_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          }
        ],
        "docs": [],
        "label": "Create"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          }
        ],
        "docs": [],
        "label": "Cancel"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          }
        ],
        "docs": [],
        "label": "Collect"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "fee",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "UpdateFee"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 8
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "config",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 9
        },
        "selector": "0x70714744"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "show",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xf1b0ace3"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "cancel",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0x9796e9a7"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "collect",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xfddedee7"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "label": "token_address",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 14
            }
          },
          {
            "label": "memo",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "recipient_azero_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "sender_azero_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "create",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xab700a1b"
      },
      {
        "args": [
          {
            "label": "fee",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "update_fee",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0xa42bb8f4"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "fee"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 1
                }
              },
              "name": "admin"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 4
                            }
                          },
                          "name": "id"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 1
                            }
                          },
                          "name": "from"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 1
                            }
                          },
                          "name": "to"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 0
                            }
                          },
                          "name": "amount"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xe28b2e12",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xe28b2e12",
                                          "ty": 1
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "token_address"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 3
                            }
                          },
                          "name": "status"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xe28b2e12",
                              "ty": 0
                            }
                          },
                          "name": "fee"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xe28b2e12",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xe28b2e12",
                                          "ty": 5
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "memo"
                        }
                      ],
                      "name": "Cheque"
                    }
                  },
                  "root_key": "0xe28b2e12"
                }
              },
              "name": "cheques"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 4
                }
              },
              "name": "cheques_total"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 1
                }
              },
              "name": "azero_id_router_address"
            }
          ],
          "name": "AzSafeSend"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 7
          },
          {
            "name": "E",
            "type": 8
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 10
          },
          {
            "name": "E",
            "type": 8
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "admin",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "fee",
                "type": 0,
                "typeName": "Balance"
              },
              {
                "name": "cheques_total",
                "type": 4,
                "typeName": "u32"
              },
              {
                "name": "azero_id_router_address",
                "type": 1,
                "typeName": "AccountId"
              }
            ]
          }
        },
        "path": [
          "az_safe_send",
          "az_safe_send",
          "Config"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 12
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 12
          },
          {
            "name": "E",
            "type": 8
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 13
          },
          {
            "name": "E",
            "type": 16
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "id",
                "type": 4,
                "typeName": "u32"
              },
              {
                "name": "from",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "to",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "amount",
                "type": 0,
                "typeName": "Balance"
              },
              {
                "name": "token_address",
                "type": 14,
                "typeName": "Option<AccountId>"
              },
              {
                "name": "status",
                "type": 3,
                "typeName": "u8"
              },
              {
                "name": "fee",
                "type": 0,
                "typeName": "Balance"
              },
              {
                "name": "memo",
                "type": 15,
                "typeName": "Option<String>"
              }
            ]
          }
        },
        "path": [
          "az_safe_send",
          "az_safe_send",
          "Cheque"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 1
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 1
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 8,
                    "typeName": "LangError"
                  }
                ],
                "index": 0,
                "name": "ContractCall"
              },
              {
                "index": 1,
                "name": "IncorrectFee"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "InkEnvError"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 3,
                "name": "NotFound"
              },
              {
                "fields": [
                  {
                    "type": 17,
                    "typeName": "PSP22Error"
                  }
                ],
                "index": 4,
                "name": "PSP22Error"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "RecordsLimitReached"
              },
              {
                "index": 6,
                "name": "Unauthorised"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 7,
                "name": "UnprocessableEntity"
              }
            ]
          }
        },
        "path": [
          "az_safe_send",
          "errors",
          "AzSafeSendError"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "InsufficientBalance"
              },
              {
                "index": 2,
                "name": "InsufficientAllowance"
              },
              {
                "index": 3,
                "name": "RecipientIsNotSet"
              },
              {
                "index": 4,
                "name": "SenderIsNotSet"
              },
              {
                "fields": [
                  {
                    "type": 5,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "SafeTransferCheckFailed"
              },
              {
                "index": 6,
                "name": "PermitInvalidSignature"
              },
              {
                "index": 7,
                "name": "PermitExpired"
              },
              {
                "fields": [
                  {
                    "type": 18,
                    "typeName": "NoncesError"
                  }
                ],
                "index": 8,
                "name": "NoncesError"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "psp22",
          "PSP22Error"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  },
                  {
                    "type": 19,
                    "typeName": "u64"
                  }
                ],
                "index": 0,
                "name": "InvalidAccountNonce"
              },
              {
                "index": 1,
                "name": "NonceOverflow"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "nonces",
          "NoncesError"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 21
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 21
          },
          {
            "name": "E",
            "type": 8
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 7
          },
          {
            "name": "E",
            "type": 16
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    config(): Promise<Result<Config, LangError>> {
        return this.stateCall('0x70714744', [])
    }

    show(id: u32): Promise<Result<Result<Cheque, AzSafeSendError>, LangError>> {
        return this.stateCall('0xf1b0ace3', [id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Create | Event_Cancel | Event_Collect | Event_UpdateFee

export interface Event_Create {
    __kind: 'Create'
    id: u32
    from: AccountId
    to: AccountId
    amount: Balance
    tokenAddress: (AccountId | undefined)
    fee: Balance
    memo: (string | undefined)
    recipientAzeroId: (string | undefined)
    senderAzeroId: (string | undefined)
}

export interface Event_Cancel {
    __kind: 'Cancel'
    id: u32
}

export interface Event_Collect {
    __kind: 'Collect'
    id: u32
}

export interface Event_UpdateFee {
    __kind: 'UpdateFee'
    fee: Balance
}

export type Message = Message_config | Message_show | Message_cancel | Message_collect | Message_create | Message_update_fee

export interface Message_config {
    __kind: 'config'
}

export interface Message_show {
    __kind: 'show'
    id: u32
}

export interface Message_cancel {
    __kind: 'cancel'
    id: u32
}

export interface Message_collect {
    __kind: 'collect'
    id: u32
}

export interface Message_create {
    __kind: 'create'
    to: AccountId
    amount: Balance
    tokenAddress: (AccountId | undefined)
    memo: (string | undefined)
    recipientAzeroId: (string | undefined)
    senderAzeroId: (string | undefined)
}

export interface Message_update_fee {
    __kind: 'update_fee'
    fee: Balance
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    fee: Balance
    azeroIdRouterAddress: AccountId
}

export interface Config {
    admin: AccountId
    fee: Balance
    chequesTotal: u32
    azeroIdRouterAddress: AccountId
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type u32 = number

export interface Cheque {
    id: u32
    from: AccountId
    to: AccountId
    amount: Balance
    tokenAddress: (AccountId | undefined)
    status: number
    fee: Balance
    memo: (string | undefined)
}

export type AzSafeSendError = AzSafeSendError_ContractCall | AzSafeSendError_IncorrectFee | AzSafeSendError_InkEnvError | AzSafeSendError_NotFound | AzSafeSendError_PSP22Error | AzSafeSendError_RecordsLimitReached | AzSafeSendError_Unauthorised | AzSafeSendError_UnprocessableEntity

export interface AzSafeSendError_ContractCall {
    __kind: 'ContractCall'
    value: LangError
}

export interface AzSafeSendError_IncorrectFee {
    __kind: 'IncorrectFee'
}

export interface AzSafeSendError_InkEnvError {
    __kind: 'InkEnvError'
    value: string
}

export interface AzSafeSendError_NotFound {
    __kind: 'NotFound'
    value: string
}

export interface AzSafeSendError_PSP22Error {
    __kind: 'PSP22Error'
    value: PSP22Error
}

export interface AzSafeSendError_RecordsLimitReached {
    __kind: 'RecordsLimitReached'
    value: string
}

export interface AzSafeSendError_Unauthorised {
    __kind: 'Unauthorised'
}

export interface AzSafeSendError_UnprocessableEntity {
    __kind: 'UnprocessableEntity'
    value: string
}

export type AccountId = Uint8Array

export type Balance = bigint

export type PSP22Error = PSP22Error_Custom | PSP22Error_InsufficientBalance | PSP22Error_InsufficientAllowance | PSP22Error_RecipientIsNotSet | PSP22Error_SenderIsNotSet | PSP22Error_SafeTransferCheckFailed | PSP22Error_PermitInvalidSignature | PSP22Error_PermitExpired | PSP22Error_NoncesError

export interface PSP22Error_Custom {
    __kind: 'Custom'
    value: string
}

export interface PSP22Error_InsufficientBalance {
    __kind: 'InsufficientBalance'
}

export interface PSP22Error_InsufficientAllowance {
    __kind: 'InsufficientAllowance'
}

export interface PSP22Error_RecipientIsNotSet {
    __kind: 'RecipientIsNotSet'
}

export interface PSP22Error_SenderIsNotSet {
    __kind: 'SenderIsNotSet'
}

export interface PSP22Error_SafeTransferCheckFailed {
    __kind: 'SafeTransferCheckFailed'
    value: string
}

export interface PSP22Error_PermitInvalidSignature {
    __kind: 'PermitInvalidSignature'
}

export interface PSP22Error_PermitExpired {
    __kind: 'PermitExpired'
}

export interface PSP22Error_NoncesError {
    __kind: 'NoncesError'
    value: NoncesError
}

export type NoncesError = NoncesError_InvalidAccountNonce | NoncesError_NonceOverflow

export interface NoncesError_InvalidAccountNonce {
    __kind: 'InvalidAccountNonce'
    value: [AccountId, bigint]
}

export interface NoncesError_NonceOverflow {
    __kind: 'NonceOverflow'
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
