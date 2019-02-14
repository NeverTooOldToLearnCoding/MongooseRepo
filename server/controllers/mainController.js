// All necessary requires, such as the Quote model.
const mongoose = require('mongoose');
var model = require("../models/animal");
var Animal = model.Animal;

module.exports = {
    index: function(req, res) {

	  Animal.find({}).sort({updatedAt:'desc'}).exec(function(err, animals) {
	    if(err) {
	      console.log('Something went wrong');
	    }else{
	    res.render('index',{animals:animals});
	    }
	  })	// code...
    },

    view: function(req, res) {
    	// code...
		res.render('form');

    },

    viewEdit: function(req, res) {
    	// code...
		Animal.find({_id:req.params.id}).sort({updatedAt:'desc'}).exec(function(err, animal) {
		if(err) {
			console.log("Something went wrong.");
		}else{
			console.log(animal);
			res.render('edit',{animal:animal});
		}
		})
    },


    edit: function(req, res) {
    	// code...
		Animal.updateOne({_id:req.params.id}, 
			{$set:{animal:req.body.animal,food:req.body.food,personality:req.body.personality,imgurl:req.body.imgurl}}, function(err){
		// This code will run when the DB has attempted to update the matching record.
		if(err){
			console.log("Something went wrong");
		}else{
			console.log("Successfully edited animal");
			res.redirect("/");
		}
		})

    },

	viewAnimal: function(req, res) {
		// code...
		  Animal.find({_id:req.params.id}).sort({updatedAt:'desc'}).exec(function(err, animal) {
		    if(err) {
		      console.log("Something went wrong.");
		    }else{
		    console.log(animal);
		    res.render('view',{animal:animal});
		    }
		  })

	},

    create: function(req, res) {

    	if(req.body == ""){
    		req.flash('error', "Your Shit is Blank, Bro.");
    	}
    	// code...
		  // create a new User with the name and age corresponding to those from req.body
		  var animal = new Animal(req.body);

		  animal.save(function(err){
		        if(err){

		            for(var key in err.errors){

		            	//reg.flash.replaceAll("'"," ");
		                req.flash('registration', err.errors[key].message);
		            }
		            // redirect the user to an appropriate route
		            res.redirect('/view');
		        }
		        else {
		            console.log("Animal was successfully saved!");
		            res.redirect('/');
		        }
		    });
    },
    destroy: function(req, res) {
    	// code...
		Animal.deleteOne({_id:req.params.id},function(err){
		if(err) {
			console.log("Something went wrong.");
		}else{
			console.log("Successfully deleted animal.");
			res.redirect('/');
			}
		})
    }
};
