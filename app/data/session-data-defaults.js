const fakeMnoRequests = require('./fake-mno-requests')
const fakeSchoolRequests = require('./fake-school-requests')
const fakeSchoolUsers = require('./fake-school-users')
const fakeRBUsers = require('./fake-rb-users')
const schoolsInResponsibleBody = require('./responsible-body-schools')
const schoolDetails = require('./school-details')

module.exports = {
  user: {
    email: 'name@example.com',
    setting: {
      org_type_is_school: true,
      name: 'Pool Hayes Primay School',
      type: 'Primary school',
      institution: 'school',
      end_user_group: 'pupil'
    },
    laptops_and_tablets: {
      allocation: 150,
      ordered: 0
    },
    routers: {
      allocation: 0,
      ordered: 0
    }
  },
  device_groups: [
    {
      group_name: "Windows laptops",
      devices: [
        {
          name: "Chromebook",
          url: "#",
          details: { 
            "Brand": "HP",
            "Operating system": "Chrome OS",
            "Screen size": "14 inch",
            "Memory": "4 GB",
            "Hard disk size": "32 GB"
          }
        },
        {
          name: "Windows tablet",
          url: "#"
        }
      ]
    },
    {
      group_name: "Chromebooks",
      devices: [
        {
          name: "Chromebook",
          url: "HP"
        }
      ]
    },
    {
      group_name: "Tablets",
      devices: [
        {
          name: "Apple iPad",
          url: "#",
          manufacturer: "Apple"
        },
        {
          name: "Windows tablet",
          url: "#"
        }
      ]
    },
    {
      group_name: "Routers",
      devices: []
    }
  ],
  order: {
    reference: 'QWER-001'
  },
  signedInHomePath: '/responsible-body',
  laPlaceholderSchoolAllocation: 1,
  laPlaceholderSchoolOrdered: 0,
  trust: false,
  rb: 'Isle of Wight',
  rbAddress: [
    'County Hall',
    'High St',
    'Newport',
    'PO30 1UD'
  ],
  devicesOrdered: 9,
  routersAllocated: 10,
  routersOrdered: 0,
  'who-orders-laptops': 'central',
  features: {
    socialCare: true,
    iss: false,
    push: true,
    mno: true,
    donated: true,
    'further-education': true,
    'sixth-form-increase': false,
    'xmas-soon': false,
    'increased-allocations': false,
    '15-self': false,
    'delay-delivery': false,
    'school-mno': true,
    'sign-up': false,
    'bulk-upload': true,
    'in-connectivity-pilots': true,
    'request-devices-google-form': true,
    'order-in-service': false
  },
  mno: {
    requests: fakeMnoRequests
  },
  mobile: fakeSchoolRequests,
  'school-users': fakeSchoolUsers,
  'rb-users': fakeRBUsers,
  schools: schoolsInResponsibleBody,
  'school-details': schoolDetails,
  'max-school-order-users': 3,
  covid: true
}
