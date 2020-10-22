import faker from "faker";
import { MockList } from "@graphql-tools/mock";

// debugger
const mockResolvers = {
	Query: {
		allPersons: () => {
			// let persons=[]
			// for(let i=0;i<100;i++){
			//     const person = {
			//         id : faker.random.uuid(),
			//         firstName : faker.name.firstName(),
			//         lastName : faker.name.lastName()
			//     }
			//     persons.push(person)
			// }
			// return persons

			return MockList(100);
		},
	},
	Person: () => ({
		id: faker.random.uuid(),
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
	}),
};

export default mockResolvers;
