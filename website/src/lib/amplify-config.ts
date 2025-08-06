// Configuración para production usando SOLO variables de entorno
const config = {
  aws_project_region: process.env.NEXT_PUBLIC_APPSYNC_REGION,
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_API_URL,
  aws_appsync_region: process.env.NEXT_PUBLIC_APPSYNC_REGION,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: process.env.NEXT_PUBLIC_APPSYNC_API_KEY,
};

// Validación de seguridad: verificar que todas las variables estén presentes
if (!config.aws_appsync_graphqlEndpoint) {
  throw new Error("❌ NEXT_PUBLIC_APPSYNC_API_URL no está configurada");
}
if (!config.aws_appsync_apiKey) {
  throw new Error("❌ NEXT_PUBLIC_APPSYNC_API_KEY no está configurada");
}
if (!config.aws_appsync_region) {
  throw new Error("❌ NEXT_PUBLIC_APPSYNC_REGION no está configurada");
}

export default config;
