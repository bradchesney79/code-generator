#! /usr/bin/env node

//NodeJS requirements
var fs = require('fs');


//###### run this script -- "this" is the app that is laid down on top of the system


//#### instructions on how to build the app source object


//#### example project data and app source object


//#### the real project data and app source object

var projectName = "test_project";

var appSrcObject = {
  "users": {
    "fields": {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED, NOT NULL",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the user",
        "parent": ""
      },
      "userName": {
        "type": "CHAR",
        "typeModifiers": "UNIQUE",
        "length": 255,
        "canonSanitValid": "required,userName,utf-8",
        "comment": "The uniqe user name associated with this user",
        "parent": ""
      },
      "firstName": {
        "type": "CHAR",
        "length": 255,
        "canonSanitValid": "required,firstName,utf-8",
        "comment": "The first name of the user",
        "parent": ""
      },
      "lastName": {
        "type": "CHAR",
        "length": 255,
        "canonSanitValid": "required,lastName,utf-8",
        "comment": "The last name of the user",
        "parent": ""
      },
      "gender": {
        "type": "TINYINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "m||f",
        "comment": "The gender of the user",
        "parent": ""
      }
    }
  },
  "emails": {
    "fields": {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of an email",
        "parent": ""
      },
      "usersId": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the associated user",
        "parent": "users"
      }
    }
  },
  "addresses": {
    "fields" : {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of an address",
        "parent": ""
      },
      "usersId": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the associated user",
        "parent": "users"
      }
    }
  },
  "phones": {
    "fields" : {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of a phone number",
        "parent": ""
      },
      "usersId": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the associated user",
        "parent": "users"
      }
    }
  },
  "accounts": {
    "fields": {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of an account",
        "parent": ""
      },
      "usersId": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the associated user",
        "parent": "users"
      },
      "accountNumber": {
        "type": "INT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required, integer, unsigned",
        "comment": "The customer facing account number",
        "index":"true",
        "parent": ""
      }
    }
  },
  "transactions": {
    "fields": {
      "id": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of a transaction",
        "parent": ""
      },
      "accountsId": {
        "type": "BIGINT",
        "typeModifiers": "UNSIGNED",
        "canonSanitValid": "required,integer,unsigned",
        "comment": "The numeric UUID of the associated account",
        "parent": "accounts"
      },
      "transactionValue": {
        "type": "DEC",
        "length": "13,4",
        "canonSanitValid": "required, integer, unsigned",
        "comment": "The value of the transaction",
        "parent": ""
      },
      "transactionDate": {
        "type": "INT",
        "typeModifiers": "UNSIGNED, NOT NULL",
        "canonSanitValid": "required, integer, unsigned",
        "comment": "The UNIX timestamp of the transaction",
        "parent": ""
      }
    }
  }
};

//NodeJS - code generator helper code

topLevelObjectsCount = appSrcObject.length;

function writeLine(fileName, content) {

  fs.appendFileSync(fileName, content, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // failed saving file
    console.log("File write failed");
  });
}

//NodeJS - global helper values

var currentObjectName;

//NodeJS - delete the generated SQL file if it exists

if (fs.existsSync("appname.sql")) {
  console.log("appname.sql deleted");
  fs.unlinkSync("appname.sql");
}
else {
  console.log("No appname.sql file to delete");
}

//NodeJS - delete the generated ORM CRUD methods creator file if it exists

if (fs.existsSync("crud.sh")) {
  console.log("crud.sh deleted");
  fs.unlinkSync("crud.sh");
}
else {
  console.log("No crud.sh file to delete");
}

//NodeJS - delete the generated endpoint creator file if it exists

if (fs.existsSync("endpoint.sh")) {
  console.log("endpoint.sh deleted");
  fs.unlinkSync("endpoint.sh");
}
else {
  console.log("No endpoint.sh file to delete");
}

//NodeJS - delete the generated Angular form stubs creator file if it exists

if (fs.existsSync("forms.sh")) {
  console.log("forms.sh deleted");
  fs.unlinkSync("forms.sh");
}
else {
  console.log("No forms.sh file to delete");
}


//NodeJS - Write generator files -- 

writeLine("appname.sql", "### Generated App SQL ###");

writeLine("appname.sql", "\n\nDROP DATABASE IF EXISTS " + projectName + ";");

writeLine("appname.sql", "\n\nCREATE DATABASE IF NOT EXISTS " + projectName + ";");

writeLine("appname.sql", "\n\nUSE " + projectName + ";");

writeLine("appname.sql", "\n\nSET FOREIGN_KEY_CHECKS = 0;");

for (var topLevelObject in appSrcObject) {
  if (appSrcObject.hasOwnProperty(topLevelObject)) { // <-- example of nice to have resilient code feature
    console.log(`appSrcObject.${topLevelObject} = ${appSrcObject[topLevelObject]}`);
    
    writeLine("appname.sql", "\n\nCREATE TABLE IF NOT EXISTS `" + topLevelObject + "` (");

    for (var subordinateLevelObject in appSrcObject[topLevelObject]) {
      console.log("  " + `appSrcObject.${topLevelObject}.${subordinateLevelObject} = ${appSrcObject[topLevelObject][subordinateLevelObject]}`);

      //if (subordinateLevelObject == "fields") {
        for (var field in appSrcObject[topLevelObject][subordinateLevelObject]) {
          console.log("    field: " + `appSrcObject.${topLevelObject}.${subordinateLevelObject}.field = ${appSrcObject[topLevelObject][subordinateLevelObject][field]}` + " = " + field);

          //console.log("Top level object: ", "  `" + topLevelObject + "Id` " +  "");
          writeLine("appname.sql", "\n  `" + field + "`");



          var parent = [];
          var index = [];

          for (var fieldProperty in appSrcObject[topLevelObject][subordinateLevelObject][field]) {
          console.log("      fieldProperty: " + `appSrcObject.${topLevelObject}.${subordinateLevelObject}.${field}.fieldProperty = ${appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty]}` + " = " + fieldProperty);

            if (fieldProperty == "type") {
              writeLine("appname.sql", " " + appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty]);
              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] == "CHAR") {
              }
              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] == "BIGINT") {
              }
              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] == "INT") {
              }
              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] == "TINYINT") {
              }
            }

            if (fieldProperty == "length") {
              writeLine("appname.sql", "(" + appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] + ")");
            }

            if (fieldProperty == 'typeModifiers') {

              var typeModifiers = appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty].split(',');
              typeModifiers.forEach(
                function(value, i) 
                {
                  writeLine("appname.sql", " " + value);
                }
              );
            }

            if (fieldProperty == "comment") {

              writeLine("appname.sql", " COMMENT '" + appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty] + "',");
            }

            if (fieldProperty == "index") {

              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty].length > 0) {
                index.push(field);
              }
            }

            if (fieldProperty == "parent") {

              if (appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty].length > 0) {
                parent.push(appSrcObject[topLevelObject][subordinateLevelObject][field][fieldProperty]);
              }
            }
          }
        }
      //}
    }

    writeLine("appname.sql", "\n  `created` INT NOT NULL COMMENT 'The UTC UNIX timestamp of when this record was created',");

    writeLine("appname.sql", "\n  `modified` INT NOT NULL COMMENT 'The UTC UNIX timestamp of when this record was modified',");

    writeLine("appname.sql", "\n  `modifiedBy` CHAR(255) NOT NULL COMMENT 'The numeric UUID user id of the user making the modification',");

    writeLine("appname.sql", "\n  PRIMARY KEY (`id`)");
    
    if (index.length > 0) {
      //additional indexes go here
      index.forEach(
        function(value, i) {
          console.log("index: ", value);
          writeLine("appname.sql", ",\n  INDEX (`" + value + "`)");
        }
      )
    }

    if (parent.length > 0) {
      //foreign key BS goes here
      parent.forEach(
        function(value, i) {
          console.log("FK: ", value);
          writeLine("appname.sql", ",\n  FOREIGN KEY (" + value + "Id) REFERENCES " + value + "(id)");
        }
      )
    }

    writeLine("appname.sql", "\n) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;");

  }
}

writeLine("appname.sql", "\n\nSET FOREIGN_KEY_CHECKS = 1;");