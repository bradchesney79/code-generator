#! /usr/bin/env node

/*
Very First is the configuration files

Next is ingensting the configs to create this file


*/


/*
Done

Create a basic object form

Turn that object into a database


Doing

Create the base level objects

Create CRUD endpoints that use the base level objects

    So much canonicalization, sanitizing, and validation...

Create the front end forms from the basic object


*/



//NodeJS requirements
var fs = require('fs');
//require('dotenv').config();


//###### run this script -- "this" is the app that is laid down on top of the system


//#### instructions on how to build the app source object


//#### example project data and app source object


//#### the real project data and app source object

var projectName = "test_project";

var databases = [
  {
    "name": "main",
    "users": [
      {
        "name": "readonly",
        "permissions": [
          "read"
        ],
        "password": "password"
        // from config file...
      },
      {
        "name": "readwrite",
        "permissions": [
          "read",
          "write"
        ],
        "password": "password"
      },
      {
        "name": "writeonly",
        "permissions": [
          "write"
        ],
        "password": "password"
      }
    ]
  }
];

var appSrcObject = {
  "users": {
    "database": "main",
    "fields": {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of the user",
      },
      "userName": {
        "fieldType": "CHAR",
        "fieldLength": 255,
        "canonSanitValid": "unique,required,userName,utf-8",
        "comment": "The uniqe user name associated with this user",
      },
      "firstName": {
        "fieldType": "CHAR",
        "fieldLength": 255,
        "canonSanitValid": "required,firstName,utf-8",
        "comment": "The first name of the user",
      },
      "lastName": {
        "fieldType": "CHAR",
        "fieldLength": 255,
        "canonSanitValid": "required,lastName,utf-8",
        "comment": "The last name of the user",
      },
      "gender": {
        "fieldType": "TINYINT",
        "canonSanitValid": "integer,unsigned,>=0",
        "comment": "The gender of the user 0=M, 1=F, & 2=other",
      }
    }
  },
  "emails": {
    "database": "main",
    "fields": {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of an email",
      },
      "usersId": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of the associated user",
        "index":"true",
        "parent": "users"
      }
    }
  },
  "addresses": {
    "database": "main",
    "fields" : {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of an address",
      },
      "usersId": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of the associated user",
        "index":"true",
        "parent": "users"
      },
      "street1": {
        "fieldType": "CHAR", 
        "fieldLength": 255,
        "canonSanitValid": "street1",
        "comment": "The first required line of a US address",
      }
    }
  },
  "phones": {
    "database": "main",
    "fields" : {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of a phone number",
      },
      "usersId": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of the associated user",
        "index":"true",
        "parent": "users"
      }
    }
  },
  "accounts": {
    "database": "main",
    "fields": {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of an account",
      },
      "usersId": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,>=0",
        "comment": "The numeric UUID of the associated user",
        "index":"true",
        "parent": "users"
      },
      "accountNumber": {
        "fieldType": "INT",
        "canonSanitValid": "required, integer, >=0",
        "comment": "The customer facing account number",
        "index":"true",
      }
    }
  },
  "transactions": {
    "database": "main",
    "fields": {
      "id": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,unsigned,integer,>=0",
        "comment": "The numeric UUID of a transaction",
      },
      "accountsId": {
        "fieldType": "BIGINT",
        "canonSanitValid": "required,integer,unsigned,>=0",
        "comment": "The numeric UUID of the associated account",
        "index":"true",
        "parent": "accounts"
      },
      "transactionValue": {
        "fieldType": "DEC",
        "fieldLength": "13,4",
        "canonSanitValid": "required, numeric",
        "comment": "The value of the transaction",
      },
      "transactionDate": {
        "fieldType": "INT",
        "canonSanitValid": "required, integer, >=0",
        "comment": "The UNIX timestamp of the transaction",
      }
    }
  }
};

//NodeJS - code generator helper code

const appObject = JSON.parse(JSON.stringify(appSrcObject));

const topLevelObjectsCount = appSrcObject.length;

function writeLine(fileName, content) {

  fs.appendFileSync(fileName, content, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // failed saving file
    console.log("File write failed");
  });
}

rmDir = function(dirPath, removeSelf) {
  if (removeSelf === undefined)
    removeSelf = true;
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        rmDir(filePath);
    }
  if (removeSelf)
    fs.rmdirSync(dirPath);
};

lowerFirstCharToUpper = function(string) {
  return string.replace(
    /^\w/,
    function (chr) {
      return chr.toUpperCase();
    }
  );
}

var capitalProjectName = projectName.replace(
  /^\w/,
  function (chr) {
    return chr.toUpperCase();
  }
);

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

if (fs.existsSync("base/README.md")) {
  rmDir("base/", true);
}
else {
  console.log("No base/ files to delete");
}

//NodeJS - delete the generated endpoint creator file if it exists

if (fs.existsSync("endpoint.sh")) {
  console.log("endpoint.sh deleted");
  fs.unlinkSync("endpoint.sh");
}
else {
  console.log("No endpoint.sh file to delete");
}

//NodeJS - delete the generated tests stubs creator file if it exists

if (fs.existsSync("tests.sh")) {
  console.log("tests.sh deleted");
  fs.unlinkSync("tests.sh");
}
else {
  console.log("No test.sh file to delete");
}

//NodeJS - delete the generated Ionic form stubs creator file if it exists

if (fs.existsSync("forms.sh")) {
  console.log("forms.sh deleted");
  fs.unlinkSync("forms.sh");
}
else {
  console.log("No forms.sh file to delete");
}


//NodeJS - Write DB generator files --

writeLine("appname.sql", "### Generated App SQL ###");

writeLine("appname.sql", "\n\nDROP DATABASE IF EXISTS " + projectName + ";");

writeLine("appname.sql", "\n\nCREATE DATABASE IF NOT EXISTS " + projectName + ";");

writeLine("appname.sql", "\n\nUSE " + projectName + ";");

writeLine("appname.sql", "\n\nSET FOREIGN_KEY_CHECKS = 0;");

Object.keys(appObject).forEach(
  function(topLevelObject) {
    writeLine("appname.sql", "\n\nCREATE TABLE IF NOT EXISTS `" + topLevelObject + "` (");

    let foreignKeys = [];

    Object.keys(appObject[topLevelObject].fields).forEach(

      function(tableField) {

        let fieldLength = "";
        let signed = "";
        let required = " NULL";
        let defaultValue = "";

        if (typeof appObject[topLevelObject].fields[tableField].fieldLength != "undefined") {
          fieldLength = " (" +  appObject[topLevelObject].fields[tableField].fieldLength + ")";
        }

        if (typeof appObject[topLevelObject].fields[tableField].canonSanitValid != "undefined") {
          if (appObject[topLevelObject].fields[tableField].canonSanitValid.indexOf(">=0") >= 0
          || appObject[topLevelObject].fields[tableField].canonSanitValid.indexOf("unsigned") >= 0) {
            signed = " UNSIGNED";
          }
          if (appObject[topLevelObject].fields[tableField].canonSanitValid.indexOf("required") >= 0) {
            required = " NOT NULL";
          }
        }

        if (appObject[topLevelObject].fields[tableField].fieldType == "TINYINT"
        || appObject[topLevelObject].fields[tableField].fieldType == "INT"
        || appObject[topLevelObject].fields[tableField].fieldType == "BIGINT"
        || appObject[topLevelObject].fields[tableField].fieldType == "DEC") {
          defaultValue = " DEFAULT 0";
        }
        else if (false) {
          // non numeric & string tests stacked here...
        }
        else {
          defaultValue = " DEFAULT \"\"";
        }

        writeLine("appname.sql", "\n" + "  `" + tableField + "` " + appObject[topLevelObject].fields[tableField].fieldType + fieldLength + signed + required + defaultValue + " COMMENT '" + appObject[topLevelObject].fields[tableField].comment + "',");
        if(typeof appObject[topLevelObject].fields[tableField].parent != "undefined") {
          foreignKeys.push(appObject[topLevelObject].fields[tableField].parent);
        }
      }
    );
    writeLine("appname.sql", "\n  `created` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'The UTC UNIX timestamp of when this record was created',");

    writeLine("appname.sql", "\n  `modified` INT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'The UTC UNIX timestamp of when this record was modified',");

    writeLine("appname.sql", "\n  `modifiedBy` CHAR(255) NOT NULL DEFAULT \"\" COMMENT 'The numeric UUID user id of the user making the modification',");

    writeLine("appname.sql", "\n  PRIMARY KEY (`id`)");

    foreignKeys.forEach(
      function(foreignKey) {
        writeLine("appname.sql", ",\n  INDEX (`" + foreignKey + "Id`)");
        writeLine("appname.sql", ",\n  FOREIGN KEY (" + foreignKey + "Id) REFERENCES " + foreignKey + "(id)");
      }
    )

    writeLine("appname.sql", "\n) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;");
  }
);

writeLine("appname.sql", "\n\nSET FOREIGN_KEY_CHECKS = 1;");


//NodeJS - Write base object class files --

fs.existsSync("base") || fs.mkdirSync("base");

writeLine("base/README.md", "# Generated CRUD Classes #");

writeLine("base/README.md", "\n\nCopy these classes to your " + projectName + " project root.");

writeLine("base/README.md", "\n\nThe classes are namespaced, import them with Composer for lazy loading;");

if (!fs.existsSync("base/")){
    fs.mkdirSync("base/");
}




/////////////////////////////////////////////
//
// Data Access Library
//
/////////////////////////////////////////////

// For each table, generate a create/update method, a read method for active records, a read method for all records, and a soft delete method to process a list of records (even a list of 1)