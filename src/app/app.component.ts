import { Component} from '@angular/core';
import { WidgetRegistry } from 'angular2-schema-form';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'sf-demo-app',
  templateUrl: './app.component.html',
  // TODO: ../bootstrap.min.css
  styleUrls: ['./app.css']
  
})
export class AppComponent {
  private schema: any;
  private model: any;
  private validators = {};

  constructor(registry: WidgetRegistry, private http: Http,) {
//	this.http.get('./assets/sampleschema.json').map((res: Response) => res.json()).subscribe(res => this.schema = res);	
	this.http.get('./assets/samplemodel.json').map((res: Response) => res.json()).subscribe(res => this.model = res);

    this.schema = {
	"type": "object",
	"widget": "wizard",
	"properties": {
		"student": {
			"type": "object",
			"properties": {
				"lastName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "Last name"
				},
				"firstName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "First name"
				},
				"id": {
					"type": "string",
					"pattern": "^[0-9]{10}[A-Z]$",
					"description": "Id",
					"placeholder": "Ex: 0000000000A"
				},
				"dateOfBirth": {
					"type": "string",
					"format": "date",
					"description": "Date of Birth",
					"placeholder": "1995-10-12"
				}
			}
		},
		"placeOfBirth": {
			"type": "object",
			"properties": {
				"city": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "City"
				},
				"country": {
					"type": "string",
					"widget": "select",
					"oneOf": [{
						"enum": ["france"],
						"description": "France"
					}, {
						"enum": ["belgium"],
						"description": "Belgium"
					}, {
						"enum": ["usa"],
						"description": "USA"
					}],
					"description": "Country",
					"default": "usa"
				},
				"state": {
					"type": "string",
					"widget": "select",
					"oneOf": [{
						"enum": ["AL"],
						"description": "01 Alabama"
					}, {
						"enum": ["AK"],
						"description": "02 Alaska"
					}, {
						"enum": ["AZ"],
						"description": "03 Arizona"
					}
					],
					"default": "AL",
					"description": "State",
					"visibleIf": {
						"country": ["usa"]
					}
				}
			}
		},
		"father": {
			"type": "object",
			"properties": {
				"lastName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "Last name"
				},
				"firstName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "First name"
				},
				"dateOfBirth": {
					"type": "string",
					"format": "date",
					"description": "Date of birth",
					"placeholder": "1995-10-12"
				}
			},
			"description": "Father"
		},
		"mother": {
			"type": "object",
			"properties": {
				"lastName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "Last name"
				},
				"maidenName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "Maiden name"
				},
				"firstName": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "First name"
				},
				"dateOfBirth": {
					"type": "string",
					"format": "date",
					"description": "Date of birth",
					"placeholder": "1995-10-12"
				}
			},
			"description": "Mother"
		},
		"addressFamily": {
			"type": "object",
			"properties": {
				"addressLine1": {
					"type": "string",
					"minLength": 10,
					"maxLength": 32,
					"description": "Address line 1"
				},
				"addressLine2": {
					"type": "string",
					"minLength": 10,
					"maxLength": 32,
					"description": "Address line 2"
				},
				"zipCode": {
					"type": "string",
					"pattern": "^[0-9]{5}$",
					"description": "ZIP code"
				},
				"city": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "City"
				}
			},
			"description": "Family address"
		},
		"addressStudent": {
			"type": "object",
			"properties": {
				"addressLine1": {
					"type": "string",
					"minLength": 10,
					"maxLength": 32,
					"description": "Address line 1"
				},
				"addressLine2": {
					"type": "string",
					"minLength": 10,
					"maxLength": 32,
					"description": "Address line 2"
				},
				"zipCode": {
					"type": "string",
					"pattern": "^[0-9]{5}$",
					"description": "ZIP code"
				},
				"city": {
					"type": "string",
					"minLength": 2,
					"maxLength": 32,
					"description": "City"
				}
			},
			"visibleIf": {
				"/sameAddress": [true]
			},
			"description": "Student address"
		},
		"sameAddress": {
			"type": "boolean",
			"default": false,
			"description": "Check if student's address is different from parents address"
		},
		"addressMail": {
			"type": "string",
			"format": "email",
			"description": "Email address"
		},
		"phoneNumber": {
			"type": "string",
			"pattern": "^(\\d\\d-){4}\\d{2}$",
			"description": "Phone number"
		},
		"siblings": {
			"type": "array",
			"description": "Siblings in higher education",
			"items": {
				"type": "object",
				"properties": {
					"lastName": {
						"type": "string",
						"description": "Last name",
						"minLength": 2,
						"maxLength": 30
					},
					"firstName": {
						"type": "string",
						"description": "First name",
						"minLength": 2,
						"maxLength": 30
					},
					"degree": {
						"type": "string",
						"widget": "select",
						"oneOf": [ {
							"enum": ["L1"],
							"description": "Licence 1"
						}, {
							"enum": ["L2"],
							"description": "Licence 2"
						}, {
							"enum": ["L3"],
							"description": "Licence 3"
						}, {
							"enum": ["M1"],
							"description": "Master 1"
						}, {
							"enum": ["M2"],
							"description": "Master 2"
						}],
						"description": "Academic degree (current year)",
						"default": "L1"
					}
				}
			}
		},
		"studyPlace": {
			"type": "object",
			"properties": {
				"universityName": {
					"type": "string",
					"minLength": 10,
					"maxLength": 32,
					"description": "Name of the university"
				},
				"degree": {
					"type": "string",
					"widget": "select",
					"oneOf": [ {
						"enum": ["L1"],
						"description": "Licence 1"
					}, {
						"enum": ["L2"],
						"description": "Licence 2"
					}, {
						"enum": ["L3"],
						"description": "Licence 3"
					}, {
						"enum": ["M1"],
						"description": "Master 1"
					}, {
						"enum": ["M2"],
						"description": "Master 2"
					}],
					"description": "Academic degree (current year)",
					"default": "L1"
				},
				"exchange": {
					"type": "boolean",
					"description": "Check if the student is in an exchange program"
				},
				"country": {
					"type": "string",
					"widget": "select",
					"oneOf": [ {
						"enum": ["england"],
						"description": "England"
					}, {
						"enum": ["USA"],
						"description": "USA"
					}, {
						"enum": ["spain"],
						"description": "Espagne"
					}],
					"default": "USA",
					"visibleIf": {
						"/studyPlace/exchange": [true]
					},
					"description": "Exchange country"
				}
			}
		},
		"comment": {
			"type": "string",
			"description": "Leave us a comment !",
			"widget": "tinymce"
		}
	},
	"required": ["student", "placeOfBirth", "father", "mother", "addressFamily", "addressMail", "phoneNumber", "studyPlace"],

	"fieldsets": [{
		"fields": ["student"],
		"title": "Student"
	}, {
		"fields": ["placeOfBirth"],
		"title": "Place of birth"
	}, {
		"fields": ["father", "mother"],
		"title": "Parents"
	}, {
		"fields": ["addressFamily", "sameAddress", "addressStudent", "addressMail", "phoneNumber"],
		"title": "Contact"
	}, {
		"fields": ["siblings"],
		"title": "Siblings"
	}, {
		"fields": ["studyPlace"],
		"title": "Current university"
	}, {
		"fields": ["comment"],
		"title": "Contact us"
	}]
}

    this.validators['/student/id'] = this.validateId;
  }

  validateId(value, property, form) {
    if (value.length === 11) {
      let list = value.substr(0, 10).split('');
      if (list.reduce((p, c, i) => { return p - (i % 2 ? +c : -c); }, 0) ) {
        let error = {'INE': {'checksum': 'INVALID CHECKSUM'}};
        return error;
      }
    }
    return null;
  }

}
