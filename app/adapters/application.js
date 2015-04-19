import DS from 'ember-data';
// import config from '../config/environment';

export default DS.FixtureAdapter.extend({
  queryFixtures: function(records, query) {
    return records.filter(function(record) {
        for(var key in query) {
            if (!query.hasOwnProperty(key)) { continue; }
            var value = query[key];
            if (record[key] !== value) { return false; }
        }
        return true;
    });
  }
});

// Switch to JSON-API when it is ready
// export default DS.ActiveModelAdapter.extend({
//   host: config.apiHost,
//   namespace: config.apiNamespace
// });
