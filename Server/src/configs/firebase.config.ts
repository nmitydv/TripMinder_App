import { registerAs } from '@nestjs/config';

export default registerAs(
    'firebase',
    (): Record<string, any> => ({
        firebaseDatabaseURL:"",
        firebaseStorageBucket:"",
        firebase: {
            /*eslint-disable */
            type: process.env.FIREBASE_type,
            project_id: process.env.FIREBASE_project_id,
            private_key_id: process.env.FIREBASE_private_key_id,
            private_key: process.env.FIREBASE_private_key.replace(/\\n/g, '\n'),
            client_email: process.env.FIREBASE_client_email,
            client_id: process.env.FIREBASE_client_id,
            auth_uri: process.env.FIREBASE_auth_uri,
            token_uri: process.env.FIREBASE_token_uri,
            auth_provider_x509_cert_url: process.env.FIREBASE_auth_provider_x509_cert_url,
            client_x509_cert_url: process.env.FIREBASE_client_x509_cert_url,
            /*eslint-enable */
          }
    })
);
