import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    fname:DS.attr('string'),
    sname:DS.attr('string'),
    email:DS.attr('string'),
    pnum:DS.attr('number'),
    Nicname:DS.attr('string'),
    Birthday:DS.attr('date'),
    relation:DS.attr('string')
    
});
