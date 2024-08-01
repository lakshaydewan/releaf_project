

const pdflinks = [
    {
      subject: 'MANUFACTURING PROCESS',
      links: [
        { id: 'unit1', title:"mp_unit-1" , src: 'src/assets/pdf folder/MP - Unit-1 (Slides).pdf' }, 
        { id: 'unit2', title:"mp_unit-2" , src: "src/assets/pdf folder/MP - Unit-2 (Slides).pdf" },
        { id: 'unit3', title:"mp_unit-3" , src: "src/assets/pdf folder/MP - Unit-3 (Slides).pdf" },
        { id: 'unit4', title:"mp_unit-4" , src: "src/assets/pdf folder/MP - Unit-4 (Slides).pdf" }, 
      ],
    }
  ];

const Theorycontent = [
  {subject : "APPLIED PHYSICS",
    content : [
      {id:"unit-1", content : "syllabus", isExpanded : false},
      {id:"unit-2", content : "syllabus", isExpanded : false},
      {id:"unit-3", content : "syllabus", isExpanded : false},
      {id:"unit-4", content : "syllabus", isExpanded : false},
    ]
  }
]

export {pdflinks,Theorycontent}