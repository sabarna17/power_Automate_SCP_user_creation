try {
	var vJsonBody = JSON.parse($.request.body.asString());
	//  These below fields are dynamic please take the ref from your Power Automate Flow
    //  Submission Date -> vJsonBody.submitDate
    //  Name ->	vJsonBody.r202efe69d1e04a94a5a47a4ecf26b978
    //  Emailid -> vJsonBody.r40c9fc41ad8a4234b4b9bb0f6fb8ed12
    //  Mobile No -> vJsonBody.r7c1bf7a7ddbd4c0d98731b11c3ecff2b
    //  Portal No -> vJsonBody.r8b02a150bebe4531b645d54a6297b7a0
    
	
	// Insert data into the custom table to track the user creations
	var insertquery = 'INSERT INTO "SCHEMA.USERS::userData.userCreateTable" VALUES(\'' + vJsonBody.r40c9fc41ad8a4234b4b9bb0f6fb8ed12 + '\', \'' + 
	                    vJsonBody.r8b02a150bebe4531b645d54a6297b7a0 + '\', \'' + 
	                    vJsonBody.r7c1bf7a7ddbd4c0d98731b11c3ecff2b + '\', \'' + 
	                    vJsonBody.r202efe69d1e04a94a5a47a4ecf26b978 + '\', \'' + 
	                    vJsonBody.submitDate + '\')';

	var oconnection = $.db.getConnection();
	var ostatement = oconnection.prepareStatement(insertquery);
	ostatement.execute();
	oconnection.commit();	
	
    // 	 Create User:
	var connection = $.hdb.getConnection();
	var fnSell = connection.loadProcedure('SCHEMA', 'PACKAGE::createUser');
	var result = fnSell(vJsonBody.r8b02a150bebe4531b645d54a6297b7a0);
    connection.commit();
    
    // Assign role to the User:
	fnSell = connection.loadProcedure('PUBLIC', 'GRANT_ACTIVATED_ROLE');
	result = fnSell('PACKAGE::hdb_role_file_name',vJsonBody.r8b02a150bebe4531b645d54a6297b7a0);
    connection.commit();    
    
    var response = {};
    response.USERNAME = vJsonBody.r8b02a150bebe4531b645d54a6297b7a0;
    response.INITPASS = "Welcome2020";
    response.LOGINURL = "https://XXXXXXXXXX.hana.ondemand.com/sap/hana/ide/";
    response.NOTE = "Your User has been created. Once Authorized, you will be able to login. Contact XXXXXXXXX@gmail.com for User role related query.";
    
    $.response.status = 200;
    $.response.contentType = "application/json";
    $.response.setBody(JSON.stringify({"RESPONSE": response}));
	
} catch (e) {
	$.response.status = 500;
	$.response.setBody(JSON.stringify(e.toString()));
}
