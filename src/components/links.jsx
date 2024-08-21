

const pdflinks = [
    {
      subject: 'MANUFACTURING PROCESS',
      links: [
        { id: 'unit1', title:"mp_unit-1" , src: "https://drive.google.com/file/d/16BrOTqvVxMHr11qAmrwS_XzIMIWz_7Al/preview" }, 
        { id: 'unit2', title:"mp_unit-2" , src: "https://drive.google.com/file/d/16K5FgPkDWheJjSKE9o8zI_IzojBM0KD5/preview" },
        { id: 'unit3', title:"mp_unit-3" , src: "https://drive.google.com/file/d/16MPcicJ1uNjnsIGJWzuQGpdyFSjtViKQ/preview" },
        { id: 'unit4', title:"mp_unit-4" , src: "https://drive.google.com/file/d/16OIMsPWXjF822pO5YkFEsfH9iVXUO5gn/preview" }, 
      ],
    },
    {
      subject: 'APPLIED MATHS-I',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/155XcjxmUljc_9wPDvpLuYo3Wtr4Ub88B/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/158gbfKeU6r-YuX4wJ9Hj11qfxy8TbHac/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/159FS-ac9-kut3Kv3dV5atTIf68eDBRmy/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/15DWuE4NnthysUuoEqv00Dz7jBA10KFMC/preview" }, 
      ],
    },
    {
      subject: 'APPLIED PHYSICS-I',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/14vCpsp7dGBT5NP6JXf3_EGavb58YlOA-/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/14vIRCXR6c5UdvMvqvrwoWwE00w0pecu3/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/15-DQUMQBPmiGlCDBFP5Nai8Alpr1_ur9/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/151qXpTwk7D5O5yuN6pRwq5y8f6xtpWdQ/preview" }, 
      ],
    },
    // {
    //   subject: 'E.V.S',
    //   links: [
    //     { id: 'unit1', title:"unit-1" , src: "link" }, 
    //     { id: 'unit2', title:"unit-2" , src: "link" },
    //     { id: 'unit3', title:"unit-3" , src: "link" },
    //     { id: 'unit4', title:"unit-4" , src: "link" }, 
    //   ],
    // },
    {
      subject: 'APPLIED CHEMISTRY',
      links: [
        { id: 'unit1', title:"unit 1-4" , src: "https://drive.google.com/file/d/17ElexRHOD_8TQZpLl7Oka4Itxzzag1t8/preview" }, 
        // { id: 'unit2', title:"unit-2" , src: "link" },
        // { id: 'unit3', title:"unit-3" , src: "link" },
        // { id: 'unit4', title:"unit-4" , src: "link" }, 
      ],
    },
    // {
    //   subject: 'PROGRAMMING IN C',
    //   links: [
    //     { id: 'unit1', title:"unit-1" , src: "link" }, 
    //     { id: 'unit2', title:"unit-2" , src: "link" },
    //     { id: 'unit3', title:"unit-3" , src: "link" },
    //     { id: 'unit4', title:"unit-4" , src: "link" }, 
    //   ],
    // },
    {
      subject: 'ELECTRICAL SCIENCE',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/16eju1sRDvkLj4qzGDWLjT8v_H7LXlYvO/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/17-nLpYWFbw2CIlfNAcvDPE92N79lxKYR/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/171cB9GbD9rCU1_Ep_py-Aj8T7wD_AQ88/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/16fnzx0jTx5ZUSkaVbUafUazmGX8Om19D/preview" }, 
      ],
    },
    // {
    //   subject: 'INDIAN CONSTITUTION',
    //   links: [
    //     { id: 'unit1', title:"unit-1" , src: "link" }, 
    //     { id: 'unit2', title:"unit-2" , src: "link" },
    //     { id: 'unit3', title:"unit-3" , src: "link" },
    //     { id: 'unit4', title:"unit-4" , src: "link" }, 
    //   ],
    // },
    {
      subject: 'ENGINEERING MECHANICS',
      links: [
        { id: 'unit1', title:"unit-1" , src: "link" }, 
        { id: 'unit2', title:"unit-2" , src: "link" },
        { id: 'unit3', title:"unit-3" , src: "link" },
        { id: 'unit4', title:"unit-4" , src: "link" }, 
      ],
    },
    {
      subject: 'APPLIED PHYSICS-II',
      links: [
        { id: 'unit1', title:"unit-1" , src: "link" }, 
        { id: 'unit2', title:"unit-2" , src: "link" },
        { id: 'unit3', title:"unit-3" , src: "link" },
        { id: 'unit4', title:"unit-4" , src: "link" }, 
      ],
    },
    {
      subject: 'APPLIED MATHS-II',
      links: [
        { id: 'unit1', title:"unit-1" , src: "link" }, 
        { id: 'unit2', title:"unit-2" , src: "link" },
        { id: 'unit3', title:"unit-3" , src: "link" },
        { id: 'unit4', title:"unit-4" , src: "link" }, 
      ],
    },
    {
      subject: 'COMMUNICATION SKILLS',
      links: [
        { id: 'unit1', title:"unit 1-4" , src: "https://drive.google.com/file/d/17Go117K7V1rc2RuZEk3w6C4n3od_5zQK/preview" }, 
        // { id: 'unit2', title:"unit-2" , src: "link" },
        // { id: 'unit3', title:"unit-3" , src: "link" },
        // { id: 'unit4', title:"unit-4" , src: "link" }, 
      ],
    },
    {
      subject: 'DLCD',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/12qGosHVLVKJ3qpJvT70Y1nHl3aaE8jxQ/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/12wqSddHj6qK5cHLaFYCQAvsmGJjeNt1z/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/130AcJVyYcsfJxGVszeLbxB64k0qmYp6-/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/1332WtDzJSnnu8ynZd3fao4xuzhYCES1N/preview" }, 
      ],
    },
    {
      subject: 'DATA STRUCTURES',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/12gZ7WrAObJHIGkcwgoElSIOO8wRE1kX3/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/12l0b-hhglpPT46M6-QtgmwIZbQZnnBWV/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/12hpnBf-mU5S66T5fe20EtYMubXhFJt41/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/12lv-0nubRPSe_TyofZ2Q6LLNM9OLRo0V/preview" }, 
      ],
    },
    // {
    //   subject: 'DISCRETE MATHEMATICS',
    //   links: [
    //     { id: 'unit1', title:"unit-1" , src: "link" }, 
    //     { id: 'unit2', title:"unit-2" , src: "link" },
    //     { id: 'unit3', title:"unit-3" , src: "link" },
    //     { id: 'unit4', title:"unit-4" , src: "link" }, 
    //   ],
    // },
    {
      subject: 'IKS',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/13gVmzK2ydGpWk_XHgcS3DN3aApPSvx_N/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/13h5fA2F8M6TP4Fm8OEfI4f6N8dQInB5H/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/13kHYYKJJxwm5p7KJt4XexkhEN8kdYwgh/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/13kWHMKqvkaGXZu8z3jzLfQqc-QH6xxr6/preview" }, 
      ],
    },
    {
      subject: 'OOPS',
      links: [
        { id: 'unit1', title:"unit-1" , src: "https://drive.google.com/file/d/139mMYs6rWlJaMfQO0_NY-HlHoyeNS_7t/preview" }, 
        { id: 'unit2', title:"unit-2" , src: "https://drive.google.com/file/d/13EgSTBNgDtB_RcD2hylmmgUP27II907L/preview" },
        { id: 'unit3', title:"unit-3" , src: "https://drive.google.com/file/d/13FCEpXGqShR2X7X7-EJhcQu8Vd9ksG9e/preview" },
        { id: 'unit4', title:"unit-4" , src: "https://drive.google.com/file/d/13RBcXToXiJ5ypsVTLZ3p-y1BKOQa5NSf/preview" }, 
      ],
    }
  ];

const Theorycontent = [
  {subject : "MANUFACTURING PROCESS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "APPLIED MATHS-I",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "APPLIED PHYSICS-I",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "E.V.S",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "APPLIED CHEMISTRY",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "PROGRAMMING IN C",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "ELECTRICAL SCIENCE",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "INDIAN CONSTITUTION",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "ENGINEERING MECHANICS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "APPLIED PHYSICS-II",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "APPLIED MATHS-II",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "COMMUNICATION SKILLS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "DLCD",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "DATA STRUCTURES",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "IKS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  {subject : "OOPS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  },
  
]

const listofsubject = [
  { id:1 ,semester:'1st', branch:'IT',  value:["APPLIED PHYSICS-I","APPLIED MATHS-I","PROGRAMMING IN C","MANUFACTURING PROCESS","APPLIED CHEMISTRY","ELECTRICAL SCIENCE","COMMUNICATION SKILLS","E.V.S"]},
  { id:2 ,semester:'2nd', branch:'IT',  value:["APPLIED PHYSICS-II","APPLIED MATHS-II","PROGRAMMING IN C","ENGINEERING MECHANICS","COMMUNICATION SKILLS","E.V.S"]},
  { id:3 ,semester:'3rd', branch:'IT',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:4 ,semester:'4th', branch:'IT',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:1 ,semester:'1st', branch:'CSE',  value:["APPLIED PHYSICS-I","APPLIED MATHS-I","PROGRAMMING IN C","MANUFACTURING PROCESS","APPLIED CHEMISTRY","ELECTRICAL SCIENCE","COMMUNICATION SKILLS","E.V.S"]},
  { id:2 ,semester:'2nd', branch:'CSE',  value:["APPLIED PHYSICS-II","APPLIED MATHS-II","PROGRAMMING IN C","ENGINEERING MECHANICS","COMMUNICATION SKILLS","E.V.S"]},
  { id:3 ,semester:'3rd', branch:'CSE',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:4 ,semester:'4th', branch:'CSE',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:1 ,semester:'1st', branch:'CSE-AIML',  value:["APPLIED PHYSICS-I","APPLIED MATHS-I","PROGRAMMING IN C","MANUFACTURING PROCESS","APPLIED CHEMISTRY","ELECTRICAL SCIENCE","COMMUNICATION SKILLS","E.V.S"]},
  { id:2 ,semester:'2nd', branch:'CSE-AIML',  value:["APPLIED PHYSICS-II","APPLIED MATHS-II","PROGRAMMING IN C","ENGINEERING MECHANICS","COMMUNICATION SKILLS","E.V.S"]},
  { id:3 ,semester:'3rd', branch:'CSE-AIML',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:4 ,semester:'4th', branch:'CSE-AIML',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:1 ,semester:'1st', branch:'CSE-DS',  value:["APPLIED PHYSICS-I","APPLIED MATHS-I","PROGRAMMING IN C","MANUFACTURING PROCESS","APPLIED CHEMISTRY","ELECTRICAL SCIENCE","COMMUNICATION SKILLS","E.V.S"]},
  { id:2 ,semester:'2nd', branch:'CSE-DS',  value:["APPLIED PHYSICS-II","APPLIED MATHS-II","PROGRAMMING IN C","ENGINEERING MECHANICS","COMMUNICATION SKILLS","E.V.S"]},
  { id:3 ,semester:'3rd', branch:'CSE-DS',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:4 ,semester:'4th', branch:'CSE-DS',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:1 ,semester:'1st', branch:'CSE-IOT',  value:["APPLIED PHYSICS-I","APPLIED MATHS-I","PROGRAMMING IN C","MANUFACTURING PROCESS","APPLIED CHEMISTRY","ELECTRICAL SCIENCE","COMMUNICATION SKILLS","E.V.S"]},
  { id:2 ,semester:'2nd', branch:'CSE-IOT',  value:["APPLIED PHYSICS-II","APPLIED MATHS-II","PROGRAMMING IN C","ENGINEERING MECHANICS","COMMUNICATION SKILLS","E.V.S"]},
  { id:3 ,semester:'3rd', branch:'CSE-IOT',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},
  { id:4 ,semester:'4th', branch:'CSE-IOT',  value:["DLCD",'DATA STRUCTURES',"IKS","OOPS","DISCRETE METHEMATICS"]},

]

const playlistlinks = {
  "1st": {
      "APPLIED CHEMISTRY": {
          "unit1": [
              {
                  "title": " Solid | Liquid | Geseous | Calorific Value | Cracking | Octane & Cetane",
                  "src": "https://www.youtube.com/embed/fBq3C92-wig?si=EiHeC85Jf-zrU4Xe"
              },
  //             {
  //                 "title": "Limits and Continuity",
  //                 "src": "https://www.youtube.com/embed/def456?si=example"
  //             },
  //             {
  //                 "title": "Differentiation",
  //                 "src": "https://www.youtube.com/embed/ghi789?si=example"
  //             }
          ],
  //         "unit2": [
  //             {
  //                 "title": "Integration Basics",
  //                 "src": "https://www.youtube.com/embed/jkl012?si=example"
  //             },
  //             {
  //                 "title": "Definite Integrals",
  //                 "src": "https://www.youtube.com/embed/mno345?si=example"
  //             }
  //         ]
      }
  },
  // "2nd": {
  //     "PHYSICS": {
  //         "unit1": [
  //             {
  //                 "title": "Kinematics",
  //                 "src": "https://www.youtube.com/embed/pqr678?si=example"
  //             },
  //             {
  //                 "title": "Newton's Laws",
  //                 "src": "https://www.youtube.com/embed/stu901?si=example"
  //             }
  //         ],
  //         "unit2": [
  //             {
  //                 "title": "Work and Energy",
  //                 "src": "https://www.youtube.com/embed/vwx234?si=example"
  //             }
  //         ]
  //     }
  // }
}


export {pdflinks,Theorycontent,listofsubject}