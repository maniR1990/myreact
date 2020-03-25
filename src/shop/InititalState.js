import casual from 'casual-browserify';

/* // Person
 
casual.name            // 'Alberto'
casual.username        // 'Darryl'
casual.first_name      // 'Derek'
casual.last_name       // 'Considine'
casual.full_name       // 'Kadin Torphy'
casual.password        // '(205)580-1350Schumm'
casual.name_prefix     // 'Miss'
casual.name_suffix     // 'Jr.'
casual.company_name    // 'Cole, Wuckert and Strosin'
casual.company_suffix  // 'Inc'
casual.catch_phrase    // 'Synchronised optimal concept'
casual.phone           // '982-790-2592' */

const rating = [1,2,3,4,5];
const gender = ['male','female'];
const NodeList = [
	{
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
    {
		id: casual._uuid(),
		name: casual.name,
		description: casual.description,
		liked: casual.boolean,
		rating: casual.random_element(rating),
        tags: [],
        gender: casual.populate_one_of(gender),
        group : []
		
    },
   
    
    
];

export default NodeList;
