'use strict';

angular.module('simplTreeApp')
  .factory('teamService', function () {
    // Service logic

    var isUnique = false,
      error = {
        duplicateTeamName : 'Another team appears to be using that name or address.',
        invalidTeamName : 'Please use letters only.'
      };

    var teamList = [{
      'title': 'Core',
      'link': 'core'
    }, {
      'title': 'Blah',
      'link': 'blah'
    }, {
      'title': 'blah West',
      'link': 'blah-west'
    }];

    var verifyUniqueTeamName = function(teamName){
      console.log('is ' + teamName + 'unique');
      var lookup, linkCheck, lookupFlag = true;

      /**
       * Is nameToUrlConversion unique
       */
      linkCheck = teamName.toLowerCase().replace(' ', '-');
      lookup = _.where(teamList, { link: linkCheck });
      console.log('linkCheck', linkCheck, 'lookup', lookup);
      // if entry was found teamName will cause url collision
      if(lookup.length){
        return false
      }

      return lookupFlag;
    };


    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      },

      validateTeamName : function(teamName){
        var result = {};

        //check for only alpha_num or spaces
        var re = /^[a-zA-Z\s]*$/,
          isValidNameEntry = re.test(teamName);
        console.log('is valid', isValidNameEntry);
        if(!isValidNameEntry){
          result = { error: error.invalidTeamName };
        }

        // check if unique, else throw error
        isUnique = verifyUniqueTeamName(teamName);
        //console.log(verifyUniqueTeamName(teamName));
        if(!isUnique){
          result = { error: error.duplicateTeamName };
        }

        console.log('result', result);
        return result;
      },

      addTeam: function (teamName) {
        var self = this,
          validationCheck = self.validateTeamName(teamName);
        if(_.has(validationCheck, 'error')){
          return validationCheck
        }
        teamList.push({ title: teamName, link: teamName });
        return isUnique;;
      },

      getTeamByLink: function (teamLink) {
        return _.where(teamList, { link: teamLink });
      },

      getTeamList: function () {
        return teamList;
      }

    };
  });
