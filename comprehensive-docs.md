{
	"info": {
		"_postman_id": "67a52ad4-dc20-411d-aedc-ad2b4ac06575",
		"name": "Meetup_Comprehensive",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "15571502"
	},
	"item": [
		{
			"name": "Get CSRF Token",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var xsrfCookie = postman.getResponseCookie(\"XSRF-TOKEN\"); ",
							"postman.setEnvironmentVariable('xsrftoken', xsrfCookie.value);"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{url}}/csrf/restore",
					"host": [
						"{{url}}"
					],
					"path": [
						"csrf",
						"restore"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get Groups of Current User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Get All Venues for a Group By Id",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create an Image for a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create a New Venue for a Group By Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Create an Event by Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Add an Image to an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Request Membership to a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Request Attendance to an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit a Venue",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Edit an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Change Membership Status",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Change Attendance Status",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete a Membership",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete an Attendance",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete an Image (For a Group)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "REQ AUTH - Delete an Image (For an Event)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Current User - Not Logged In",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Sign Up",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"first.test@gmail.com\",\n  \"username\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create 2nd User for Co-host Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"SecondTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"second.test@gmail.com\",\n  \"username\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create 3rd User for Member Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"ThirdTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"third.test@gmail.com\",\n  \"username\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create 4th User for Pending Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FourthTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"fourth.test@gmail.com\",\n  \"username\": \"fourthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create 5th User for Stranger Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FifthTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"fifth.test@gmail.com\",\n  \"username\": \"fifthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Duplicate Email",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"first.test@gmail.com\",\n  \"username\": \"uniqueusername\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Duplicate Username",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"FirstTest\",\n  \"lastName\": \"AATester\",\n  \"email\": \"unique.email@gmail.com\",\n  \"username\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Sign Up - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"firstName\": \"\",\n  \"lastName\": \"\",\n  \"email\": \"\",\n  \"username\": \"\",\n  \"password\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/users",
					"host": [
						"{{url}}"
					],
					"path": [
						"users"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log In - Username",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log Out",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Log In - Invalid Credentials",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"wrong password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Log In - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"\",\n  \"password\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Log In - Email",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('userId', responseJson.user.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"first.test@gmail.com\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Current User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('groupId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"The Valid Data Group\",\n  \"about\": \"Enjoy several rounds of valid data being sent and stored in a database\",\n  \"type\": \"Online\",\n  \"private\": true,\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add an Image to a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('groupImageId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add a 2nd Image to a Group for Testing",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('secondGroupImageId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image2.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a Group - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"This Group's name is longer than 60 characters, which means this should throw an error!\",\n  \"about\": \"Small about sections throw errors too!\",\n  \"type\": \"Outer Space\",\n  \"private\": \"yes\",\n  \"city\": \"\",\n  \"state\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Add an Image to a Group - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups By Current User - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Group By Id - Verify Creation, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Details of a Group By Id - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"The Valid Edit Group\",\n  \"about\": \"Enjoy multiple rounds of valid data being edited and updated in a database\",\n  \"type\": \"Online\",\n  \"private\": false,\n  \"city\": \"Edicity\",\n  \"state\": \"New Editia\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Group - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"This Group's name is longer than 60 characters, which means this should throw an error!\",\n  \"about\": \"Small about sections throw errors too!\",\n  \"type\": \"Outer Space\",\n  \"private\": \"yes\",\n  \"city\": \"\",\n  \"state\": \"\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Group - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"The Valid Edit Group\",\n  \"about\": \"Enjoy multiple rounds of valid data being edited and updated in a database\",\n  \"type\": \"Online\",\n  \"private\": false,\n  \"city\": \"Edicity\",\n  \"state\": \"New Editia\"\n}\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a New Venue for a Group By Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('venueId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a New Venue - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"\",\n  \"city\": \"\",\n  \"state\": \"\",\n  \"lat\": 537.7645358,\n  \"lng\": -522.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create a New Venue - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Group By Id - Verify Creation, Prevention",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Venues for a Group By Id - Verify Creation, Prevention",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Venues for a Group By Id - Invalid Group Id",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Venue",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{venueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{venueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Venue - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"\",\n  \"city\": \"\",\n  \"state\": \"\",\n  \"lat\": 537.7645358,\n  \"lng\": -522.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{venueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{venueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit a Venue - Invalid Venue Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Group By Id - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Venues for a Group By Id - Verify Edits",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Event by Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('eventId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add an Image to an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('eventImageId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Event - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"New\",\n  \"type\": \"Outer Space\",\n  \"capacity\": \"A lot\",\n  \"price\": -18.50,\n  \"description\": \"\",\n  \"startDate\": \"2000-11-22 20:00:00\",\n  \"endDate\": \"2000-11-22 19:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Event - Invalid Venue Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": 5000,\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Create an Event - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Add an Image to an Event - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events by Group Id - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of Event By Id - Verify Creation, Prevention, Image Update",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Events by Group Id - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Details of Event By Id - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit an Event - Body Validation",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"New\",\n  \"type\": \"Outer Space\",\n  \"capacity\": \"A lot\",\n  \"price\": -18.50,\n  \"description\": \"\",\n  \"startDate\": \"2000-11-22 20:00:00\",\n  \"endDate\": \"2000-11-22 19:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit an Event - Invalid Venue Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": 5000,\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Edit an Event - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events by Group Id - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of Event By Id - Verify Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 2nd User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('secondUserId', responseJson.user.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Request Membership to a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 3rd User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('thirdUserId', responseJson.user.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Request Membership to a Group as 3rd User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 4th User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('fourthUserId', responseJson.user.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"fourthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Request Membership to a Group as 4th User",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Membership - Already Requested",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Membership - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as Original User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Change Membership to Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{secondUserId}},\n  \"status\": \"co-host\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "Change Membership to Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{thirdUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 2nd User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Request Attendance to an Event - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Membership - Already a Co-host/Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to a Group - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Group - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Not Your Group\",\n  \"about\": \"You shouldn't be able to modify a Group that you don't have access to, even if the body validations pass\",\n  \"type\": \"In person\",\n  \"private\": true,\n  \"city\": \"Trespass City\",\n  \"state\": \"NYS\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Co-host - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{thirdUserId}},\n  \"status\": \"co-host\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Membership - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Group - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create a New Venue - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('secondVenueId', responseJson.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"456 Another Venue Place\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Create an Event - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('secondEventId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{secondVenueId}},\n  \"name\": \"Valid Data Group Second Data Creation Event\",\n  \"type\": \"In person\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The second event creation for our group! Come say hello world again!\",\n  \"startDate\": \"2030-10-22 20:00:00\",\n  \"endDate\": \"2030-10-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add an Image to an Event - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('secondEventImageId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"co-image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit a Venue - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"654 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{secondVenueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{secondVenueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Edit an Event - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{secondVenueId}},\n  \"name\": \"Valid Edit Group Second Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The second event edit for our group! Come say fizz buzz bazz!\",\n  \"startDate\": \"2030-10-26 20:00:00\",\n  \"endDate\": \"2030-10-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Venues for a Group By Id - Verify Creation, Edits",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of Event By Id - Verify Creation, Edits",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Image (For an Event) - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{secondEventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{secondEventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Image (For an Event) - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{secondEventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{secondEventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of Event By Id - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Image (For a Group) - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{secondGroupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{secondGroupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Image (For a Group) - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{secondGroupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{secondGroupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Details of a Group By Id - Verify Image Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Event - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Event - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{secondEventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{secondEventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events by Group Id - Verify Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 3rd User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Request Attendance to an Event - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Membership - Already a Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Attendance - Already Requested",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Attendance - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Get All Venues for a Group By Id - as Member",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create an Event - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create a New Venue for a Group By Id - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to a Group - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to an Event - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Group - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Not Your Group\",\n  \"about\": \"You shouldn't be able to modify a Group that you don't have access to, even if the body validations pass\",\n  \"type\": \"In person\",\n  \"private\": true,\n  \"city\": \"Trespass City\",\n  \"state\": \"NYS\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Venue - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{venueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{venueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit an Event - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Member - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Co-host - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"co-host\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For an Event) - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{eventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{eventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For a Group) - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{groupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{groupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Membership - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Event - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Group - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 4th User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"fourthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Get All Venues for a Group By Id - as Pending",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Request Attendance - as Pending Membership",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create an Event - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create a New Venue for a Group By Id - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to a Group - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to an Event - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Group - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Not Your Group\",\n  \"about\": \"You shouldn't be able to modify a Group that you don't have access to, even if the body validations pass\",\n  \"type\": \"In person\",\n  \"private\": true,\n  \"city\": \"Trespass City\",\n  \"state\": \"NYS\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Venue - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{venueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{venueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit an Event - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Member - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Co-host - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"co-host\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For an Event) - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{eventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{eventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For a Group) - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{groupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{groupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Membership - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Event - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Group - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 5th User *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('fifthUserId', responseJson.user.id)"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"fifthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Get All Venues for a Group By Id - as Stranger",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Request Attendance - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create an Event - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Data Group First Data Creation Event\",\n  \"type\": \"Online\",\n  \"capacity\": 10,\n  \"price\": 18.50,\n  \"description\": \"The first event creation for our group! Come say hello world!\",\n  \"startDate\": \"2030-11-22 20:00:00\",\n  \"endDate\": \"2030-11-22 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"events"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Create a New Venue for a Group By Id - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"123 Should Exist Street\",\n  \"city\": \"San Frangoodtogo\",\n  \"state\": \"CA\",\n  \"lat\": 37.7645358,\n  \"lng\": -122.4730327\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/venues",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"venues"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to a Group - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Add an Image to an Event - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"blackmail-image.url\",\n  \"preview\": true\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Group - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Not Your Group\",\n  \"about\": \"You shouldn't be able to modify a Group that you don't have access to, even if the body validations pass\",\n  \"type\": \"In person\",\n  \"private\": true,\n  \"city\": \"Trespass City\",\n  \"state\": \"NYS\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit a Venue - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"address\": \"321 Valid Edit Way\",\n  \"city\": \"Edicity\",\n  \"state\": \"NE\",\n  \"lat\": -26.6534247,\n  \"lng\": 133.5641438\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/venues/{{venueId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"venues",
						"{{venueId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Edit an Event - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"venueId\": {{venueId}},\n  \"name\": \"Valid Edit Group First Edited Data Event\",\n  \"type\": \"In person\",\n  \"capacity\": 20,\n  \"price\": 15.80,\n  \"description\": \"The first event edit for our group! Come say fizz buzz!\",\n  \"startDate\": \"2030-11-26 20:00:00\",\n  \"endDate\": \"2030-11-26 21:00:00\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Member - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Membership to Co-host - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fourthUserId}},\n  \"status\": \"co-host\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For an Event) - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{eventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{eventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Image (For a Group) - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{groupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{groupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Membership - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Event - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete a Group - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as Original User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Change Attendance Status To Attending - as Owner",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"attending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Members of a Group by Id - as Owner",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Attendees of an Event by Id - as Owner",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Membership to Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{secondUserId}},\n  \"status\": \"pending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Membership - Invalid User Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": 5000,\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Membership - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{secondUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Membership - Membership DNE",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"memberId\": {{fifthUserId}},\n  \"status\": \"member\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Attendance to Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"pending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Attendance - Invalid User Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": 5000,\n  \"status\": \"attending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Attendance - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"attending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Change Attendance - Attendance DNE",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{fifthUserId}},\n  \"status\": \"attending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 5th User Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"fifthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Members of a Group by Id - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Attendees of an Event by Id - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Attendance Status - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"waitlist\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Attendance - as Stranger",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 4th User Again Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"fourthaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Members of a Group by Id - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Attendees of an Event by Id - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Attendance Status - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"waitlist\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Attendance - as Pending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 3rd User Again Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Members of a Group by Id - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Attendees of an Event by Id - as Pending Attendence",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Change Attendance Status - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{secondUserId}},\n  \"status\": \"waitlist\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Attendance - as Member",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{secondUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{secondUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 2nd User Again Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"secondaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Members of a Group by Id - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Attendees of an Event by Id - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "Change Attendance Status - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"userId\": {{thirdUserId}},\n  \"status\": \"attending\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Members of a Group - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/members",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"members"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Attendees of an Event - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendees",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendees"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Request Attendance - Already Attending",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance"
					]
				}
			},
			"response": []
		},
		{
			"name": "NOT AUTHED - Delete an Attendance - as Co-host",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as 3rd User Again Again Again *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"thirdaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add an Image to an Event - as Attendee",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							"const responseJson = pm.response.json();",
							"postman.setEnvironmentVariable('thirdEventImageId', responseJson.id)",
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"url\": \"attendee-image.url\",\n  \"preview\": false\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/images",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"images"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Attendance - Own Attendance",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Attendance - Attendance DNE",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Attendance - Invalid User Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}/attendance/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}",
						"attendance",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete an Attendance - Invalid Event Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/5000/attendance/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"5000",
						"attendance",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Membership - Own Membership",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Membership - Membership DNE",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Membership - Invalid Member Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}/membership/5000",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}",
						"membership",
						"5000"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Membership - Invalid Group Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/5000/membership/{{thirdUserId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"5000",
						"membership",
						"{{thirdUserId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "***** Log In as Original User Final Time *****",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"credential\": \"firstaatester\",\n  \"password\": \"secret password\"\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/session",
					"host": [
						"{{url}}"
					],
					"path": [
						"session"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Image (For a Group)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/group-images/{{groupImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"group-images",
						"{{groupImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Image (For an Event)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/event-images/{{eventImageId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"event-images",
						"{{eventImageId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete an Event",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events/{{eventId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"events",
						"{{eventId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete a Group",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Delete a Group - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "DELETE",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups - Verify Group Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Groups By Current User - Verify Group Delete",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/current",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"current"
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get Details of a Group By Id - Invalid Id",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/groups/{{groupId}}",
					"host": [
						"{{url}}"
					],
					"path": [
						"groups",
						"{{groupId}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Events With Params (Fill in params)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"events"
					],
					"query": [
						{
							"key": "page",
							"value": "",
							"description": "integer, minimum: 1, maximum: 10, default: 1",
							"disabled": true
						},
						{
							"key": "size",
							"value": "",
							"description": "integer, minimum: 1, maximum: 20, default: 20",
							"disabled": true
						},
						{
							"key": "name",
							"value": "",
							"description": "string, optional",
							"disabled": true
						},
						{
							"key": "type",
							"value": "",
							"description": "string, optional",
							"disabled": true
						},
						{
							"key": "startDate",
							"value": "",
							"description": "string, optional",
							"disabled": true
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "ERROR - Get All Events With Params - Invalid Params (Fill in params)",
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				},
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "XSRF-TOKEN",
						"value": "{{xsrftoken}}",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{url}}/events",
					"host": [
						"{{url}}"
					],
					"path": [
						"events"
					],
					"query": [
						{
							"key": "page",
							"value": "",
							"description": "integer, minimum: 1, maximum: 10, default: 1",
							"disabled": true
						},
						{
							"key": "size",
							"value": "",
							"description": "integer, minimum: 1, maximum: 20, default: 20",
							"disabled": true
						},
						{
							"key": "name",
							"value": "",
							"description": "string, optional",
							"disabled": true
						},
						{
							"key": "type",
							"value": "",
							"description": "string, optional",
							"disabled": true
						},
						{
							"key": "startDate",
							"value": "",
							"description": "string, optional",
							"disabled": true
						}
					]
				}
			},
			"response": []
		}
	]
}
