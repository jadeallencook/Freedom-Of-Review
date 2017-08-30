// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  currentPage: 'home',
  businessName: 'Freedom Of Review',
  firebaseConfig: {
    apiKey: "AIzaSyCuJveVulLMTP2HOm1XFiLDjCHo2EOHDbM",
    authDomain: "freedom-of-review.firebaseapp.com",
    databaseURL: "https://freedom-of-review.firebaseio.com",
    projectId: "freedom-of-review",
    storageBucket: "freedom-of-review.appspot.com",
    messagingSenderId: "676763741871"
  },
  categories: [
    {
      single: 'Police Officer',
      plural: 'Police',
      category: 'police'
    }, {
      single: 'District Judge',
      plural: 'District Judges',
      category: 'judge'
    }, {
      single: 'Firefighter',
      plural: 'Firefighters',
      category: 'firefighter'
    }, {
      single: 'Public Defender',
      plural: 'Public Defenders',
      category: 'defender'
    }, {
      single: 'Teacher',
      plural: 'Teachers',
      category: 'teacher'
    }, {
      single: 'Other Education',
      plural: 'Other Education',
      category: 'education'
    }, {
      single: 'Social Worker',
      plural: 'Social Workers',
      category: 'social'
    }, {
      single: 'Public Employee',
      plural: 'Public Employees',
      category: 'employee'
    }, {
      single: 'President',
      blocked: true,
      plural: 'Presidents',
      category: 'president'
    }]
};
