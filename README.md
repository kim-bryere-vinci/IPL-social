# IPL social

## student
Last name : BRYERE
First name : Kim
Vinci email : kim.bryere@student.vinci.be

Github URL : https://github.com/kim-bryere-vinci/IPL-social

## Description
This Project provide email validation in TypeScript using a TDD approach. 
The function must verify that a string is a valid email address: 

    - It should have exactly one @
    - It should at least contain an '.' in name of the domain name
    - It should not contain any space
    - It should have text before and after '@'

## Run tests 
npm test

## Architecture

The project is organized as follows: 

- 'src/' : contains the TypeScript source code
    - 'emailChecker.ts' : implementation of the email validation function
- 'tests/' : contains unit tests written with jest
    - 'emailChecker.test.ts' : TDD tests for the validation function
 
- 'jest.config.js' : configuration file for jest and ts-jest
- 'tsconfig.json' : TypeScript compiler configurations
-  ' package.json' : project dependencies and scripts
 
