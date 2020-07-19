# Automate SCP User ID Creation by Azure Power Automate
Onboarding of SCP Users can be automated by AZURE Power Automation easily.
The process followed as Below:
1.	Microsoft Forms are created and sent to the user by an accessible link.
2.	User submits with required details 
3.	It goes to the Approver
4.	Approver Approves the User Creation
5.	SCP XSJS API is executed, and User ID has been generated with initial password.

Integrations and Process Architecture:

![Architecture](https://github.com/sabarna17/power_Automate_SCP_user_creation/blob/master/Architecture.png)

This is a basic example for SCP DB User ID creation for your organization.
Used tool lists:
1.  Microsoft Forms
2.  Power Automation
3.  HANA XSJS 
4.  ‘.hdb’ Packages
