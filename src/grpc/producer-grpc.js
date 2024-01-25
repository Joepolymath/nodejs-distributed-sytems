const grpc = require('@grpc/grpc-js');
const loader = require('@grpc/proto-loader');

const pkg_def = loader.loadSync(__dirname + '/../shared/recipe.proto');
const recipe = grpc.load;
