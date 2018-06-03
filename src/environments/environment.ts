// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  KEYCLOAK_URL: 'https://keycloak.webmarks.net/auth',
  KEYCLOAK_REALM: 'qcm',
  KEYCLOAK_CLIENTID: 'qcm-designer-web',
  // BACKEND_URL: 'http://localhost:8000/api'
  PAGE_SIZE: 8,
  API_URL: 'http://localhost:8080/api/v1/'
};
