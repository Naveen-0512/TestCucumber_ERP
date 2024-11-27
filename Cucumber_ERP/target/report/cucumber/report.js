$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeatureFiles/Supplier.feature");
formatter.feature({
  "name": "",
  "description": "As Admin user i want user ERP module",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003csuppliername\u003e\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnote\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "suppliername",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "Testing1",
        "Ameerpet1",
        "Hydearbad",
        "India",
        "Qedgetech1",
        "8765432123",
        "test@gmail.com",
        "7654321234",
        "iam a new Supplier"
      ]
    },
    {
      "cells": [
        "Testing4",
        "Ameerpet15",
        "Hydearbad",
        "India",
        "Qedgetech5",
        "8765432123",
        "test@gmail.com",
        "7654321234",
        "iam a new Supplier"
      ]
    },
    {
      "cells": [
        "Testing6",
        "Ameerpet14",
        "Hydearbad",
        "India",
        "Qedgetech3",
        "8765432123",
        "test@gmail.com",
        "7654321234",
        "iam a new Supplier"
      ]
    },
    {
      "cells": [
        "Testing15",
        "Ameerpet31",
        "Hydearbad",
        "India",
        "Qedgetech145",
        "8765432123",
        "test@gmail.com",
        "7654321234",
        "iam a new Supplier"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Testing1\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet1\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedgetech1\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7654321234\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Testing4\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet15\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedgetech5\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7654321234\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Testing6\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet14\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedgetech3\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7654321234\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "i want add suppliers with multipe data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@supplier"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Testing15\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet31\" with \"xpath\" and \"//*[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hydearbad\" with \"xpath\" and \"//*[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//*[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedgetech145\" with \"xpath\" and \"//*[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7654321234\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam a new Supplier\" with \"xpath\" and \"//*[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify SupplierNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_SupplierNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Customer number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCustomername\u003e\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003caddress\u003e\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccity\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccountry\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003ccperson\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cpnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmail\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmnumber\u003e\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cnote\u003e\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Verify CustomerNumber",
  "keyword": "When "
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Customername",
        "address",
        "city",
        "country",
        "cperson",
        "pnumber",
        "mail",
        "mnumber",
        "note"
      ]
    },
    {
      "cells": [
        "ramu1",
        "ameerpet15",
        "Hyderabad",
        "India",
        "Qedge1",
        "8765432123",
        "Test@gmail.com",
        "8765432123",
        "iam new Customer"
      ]
    },
    {
      "cells": [
        "ramu10",
        "ameerpet14",
        "Hyderabad",
        "India",
        "Qedge1",
        "8765432123",
        "Test@gmail.com",
        "8765432123",
        "iam new Customer"
      ]
    },
    {
      "cells": [
        "ramu15",
        "ameerpet18",
        "Hyderabad",
        "India",
        "Qedge1",
        "8765432123",
        "Test@gmail.com",
        "8765432123",
        "iam new Customer"
      ]
    },
    {
      "cells": [
        "ramu13",
        "ameerpet13",
        "Hyderabad",
        "India",
        "Qedge1",
        "8765432123",
        "Test@gmail.com",
        "8765432123",
        "iam new Customer"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ramu1\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ameerpet15\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Customer\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify CustomerNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_CustomerNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ramu10\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ameerpet14\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Customer\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify CustomerNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_CustomerNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ramu15\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ameerpet18\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Customer\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify CustomerNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_CustomerNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Launch browser as",
  "keyword": "Given "
});
formatter.match({
  "location": "ERPSteps.launch_browser_as()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "launch url",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.launch_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for username with \"name\" and \"username\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password with \"xpath\"  and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login button with \"xpath\" and \"//button[@id\u003d\u0027btnsubmit\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Customer link with \"xpath\" and \"(//a[text()\u003d\u0027Customers\u0027])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for AddIcon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_AddIcon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Addicon button with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Addicon_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ramu13\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ameerpet13\" with \"xpath\" and \"//textarea[@id\u003d\u0027x_Address\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad\" with \"xpath\" and \"//input[@id\u003d\u0027x_City\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"xpath\" and \"//input[@id\u003d\u0027x_Country\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"xpath\" and \"//input[@id\u003d\u0027x_Contact_Person\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Phone_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"xpath\" and \"//*[@id\u003d\u0027x__Email\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"8765432123\" with \"xpath\" and \"//*[@id\u003d\u0027x_Mobile_Number\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Customer\" with \"xpath\" and \"//input[@id\u003d\u0027x_Notes\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "wait for ConfirmOk button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_ConfirmOk_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Confirm ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Confirm_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.wait_for_Alert_ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify CustomerNumber",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.verify_CustomerNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.click_Logout_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "ERPSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});