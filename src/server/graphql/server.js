const graphqlHTTP = require('express-graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull, GraphQLID, GraphQLList}  = require('graphql');
const {findTeam} = require('../api/index') 


const QueryType = new GraphQLObjectType({
	name: 'RootQuery',
	description: 'The root query',/* ... */
	fields: () => ({
		teams: {
			type: new GraphQLList(TeamType),
			args: {
		    	name: { type: GraphQLString },
		  	},
			resolve: (root, args) => findTeam(args.name)
		}
	})
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  description: 'Team of someone',
  fields: () => ({
  	id: {
  	  type: GraphQLID,
  	  resolve: team => team.time_id
  	},
    name: {
      type: GraphQLString,
      resolve: team => team.nome,
    },
    owner: {
      type: GraphQLString,
      resolve: team => team.nome_cartola,
    }
  }),
});

/*const RootQuery = new GraphQLObjectType({ 
	name: 'RootQuery',
	description: 'The root query',
	fields: {
	    viewer: {
			type: GraphQLString,
			resolve() {
				return 'viewer!'; 
			}
		},
		node: {
    		type: GraphQLString,
    		args: {
				id: {
					type: new GraphQLNonNull(GraphQLID)
				} 
			},
			resolve(source, args) {
				return inMemoryStore[args.key];
			} 
		}
	}
});*/

/*let inMemoryStore = {};
const RootMutation = new GraphQLObjectType({
	name: 'RootMutation',
	description: 'The root mutation',
	fields: {
		setNode: {
			type: GraphQLString,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID)
				}, 
				value: {
					type: new GraphQLNonNull(GraphQLString), 
				}
      		},
  			resolve(source, args) {
    			inMemoryStore[args.key] = args.value;
				return inMemoryStore[args.key]; 
			}
		} 
	}
});*/

const schema = new GraphQLSchema({
	query: QueryType,
	//mutation: RootMutation
});

module.exports = graphqlHTTP({schema, graphiql: true}); 