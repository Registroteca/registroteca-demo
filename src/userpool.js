import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

const poolData = { UserPoolId: "us-east-1_FbccwS3HY", ClientId: "ose7pondmf0tst4f1msise4a9" };
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

// React
export const GetUserIDToken = () => { };
const cognitoUser = userPool.getCurrentUser();
if (cognitoUser != null) {
    cognitoUser.getSession((err, session) => {
        if (err) {
            console.log(err);
        } else if (!session.isValid()) {
            console.log("Invalid session.");
        } else {
            return session.getIdToken().getJwtToken();
        }
    });
} else {
    console.log("User not found.");
}

