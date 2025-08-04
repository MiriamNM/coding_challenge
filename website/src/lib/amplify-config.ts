// Debug: verificar variables de entorno antes de crear config
console.log('🔧 DEBUG amplify-config.ts:');
console.log('🔧 NEXT_PUBLIC_APPSYNC_API_URL:', process.env.NEXT_PUBLIC_APPSYNC_API_URL);
console.log('🔧 NEXT_PUBLIC_APPSYNC_REGION:', process.env.NEXT_PUBLIC_APPSYNC_REGION);
console.log('🔧 NEXT_PUBLIC_APPSYNC_API_KEY:', process.env.NEXT_PUBLIC_APPSYNC_API_KEY);

const config = {
  aws_project_region: process.env.NEXT_PUBLIC_APPSYNC_REGION || "us-east-1",
  aws_appsync_graphqlEndpoint:
    process.env.NEXT_PUBLIC_APPSYNC_API_URL ||
    "https://wstd67s6mnd7rm7kp7ltsgwsnq.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: process.env.NEXT_PUBLIC_APPSYNC_REGION || "us-east-1",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey:
    process.env.NEXT_PUBLIC_APPSYNC_API_KEY || "da2-y2dypctbyreexayorujylbpila",
  // Comentamos la configuración de Cognito para usar solo API_KEY
  // aws_cognito_identity_pool_id: "us-east-1:312009cb-6045-4e97-a2d7-59cd2f7180b0",
  // aws_cognito_region: "us-east-1",
  // aws_user_pools_id: "us-east-1_vG4iNFMWK",
  // aws_user_pools_web_client_id: "77i0jo637bcvgkc2mfctfck2h3",
  // oauth: {},
  // aws_cognito_username_attributes: ["EMAIL"],
  // aws_cognito_social_providers: [],
  // aws_cognito_signup_attributes: ["EMAIL"],
  // aws_cognito_mfa_configuration: "OFF",
  // aws_cognito_mfa_types: ["SMS"],
  // aws_cognito_password_protection_settings: {
  //   passwordPolicyMinLength: 8,
  //   passwordPolicyCharacters: [],
  // },
  // aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default config;
