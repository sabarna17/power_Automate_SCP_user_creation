# Automate SCP User ID Creation by Azure Power Automate
Onboarding of SCP Users can be automated by AZURE Power Automation easily. This is a basic example for SCP HANA DB(Neo) User ID creation for your organization.
The process followed as Below:
1.	Microsoft Forms are created and sent to the user by an accessible link.
2.	User submits with required details 
3.	It goes to the Approver
4.	Approver Approves the User Creation
5.	SCP XSJS API is executed, and User ID has been generated with initial password.

Integrations and Process Architecture:

![Architecture](https://github.com/sabarna17/power_Automate_SCP_user_creation/blob/master/Architecture.png)


## Steps followed:
1.  Created Microsoft Forms - https://github.com/sabarna17/power_Automate_SCP_user_creation/blob/master/images/microsoftForms.png
2.  Created flows in Power Automate - https://github.com/sabarna17/power_Automate_SCP_user_creation/blob/master/images/powerAutomate.png
3.  Created Packages ‘.hdb’ files for tables, roles, procedure, xsjs - https://github.com/sabarna17/power_Automate_SCP_user_creation/blob/master/images/scp_HDB_Packages.png
4.  Call the XSJS inside Power Automate

## Note: 
You can Validate the EmailID by Sending Email from Power Automate Process.
You can Validate the Mobile number by using Twilio APIs.
In Power Automate add approver before creating the User ID.

