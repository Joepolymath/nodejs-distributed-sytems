// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var recipe_pb = require('./recipe_pb.js');

function serialize_recipe_Empty(arg) {
  if (!(arg instanceof recipe_pb.Empty)) {
    throw new Error('Expected argument of type recipe.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipe_Empty(buffer_arg) {
  return recipe_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipe_Meta(arg) {
  if (!(arg instanceof recipe_pb.Meta)) {
    throw new Error('Expected argument of type recipe.Meta');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipe_Meta(buffer_arg) {
  return recipe_pb.Meta.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipe_Recipe(arg) {
  if (!(arg instanceof recipe_pb.Recipe)) {
    throw new Error('Expected argument of type recipe.Recipe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipe_Recipe(buffer_arg) {
  return recipe_pb.Recipe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_recipe_RecipeRequest(arg) {
  if (!(arg instanceof recipe_pb.RecipeRequest)) {
    throw new Error('Expected argument of type recipe.RecipeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_recipe_RecipeRequest(buffer_arg) {
  return recipe_pb.RecipeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RecipeServiceService = exports.RecipeServiceService = {
  getRecipe: {
    path: '/recipe.RecipeService/GetRecipe',
    requestStream: false,
    responseStream: false,
    requestType: recipe_pb.RecipeRequest,
    responseType: recipe_pb.Recipe,
    requestSerialize: serialize_recipe_RecipeRequest,
    requestDeserialize: deserialize_recipe_RecipeRequest,
    responseSerialize: serialize_recipe_Recipe,
    responseDeserialize: deserialize_recipe_Recipe,
  },
  getMetaData: {
    path: '/recipe.RecipeService/GetMetaData',
    requestStream: false,
    responseStream: false,
    requestType: recipe_pb.Empty,
    responseType: recipe_pb.Meta,
    requestSerialize: serialize_recipe_Empty,
    requestDeserialize: deserialize_recipe_Empty,
    responseSerialize: serialize_recipe_Meta,
    responseDeserialize: deserialize_recipe_Meta,
  },
};

exports.RecipeServiceClient = grpc.makeGenericClientConstructor(RecipeServiceService);
