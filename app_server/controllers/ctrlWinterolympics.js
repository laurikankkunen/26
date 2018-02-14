
const winnerlist = function(req, res){
    res.render('Winterolympics',{
        winners:
        [
            {year:'1980', player:'Milan Nový: (15)', team: 'Czechoslovakia'},
            {year:'1984', player:'Erich Kuhnhackl: (14)', team: 'West Germany'},
            {year:'1988', player:'Vladimir Krutov: (15)', team: 'Soviet Union'},
            {year:'1992', player:'Joe Juneau: (15)', team: 'Canada'},
            {year:'1994', player:'Zigmund Palffy: (10)', team: 'Slovakia'},
            {year:'1998', player:'Teemu Selänne: (10)', team: 'Finland'},
            {year:'2002', player:'Mats Sundin: (9)', team: 'Finland'},
            {year:'2006', player:'Teemu Selänne: (11)', team: 'Finland'},
            {year:'2010', player:'Pavol Demitra: (10)', team: 'Slovakia'},
            {year:'2014', player:'Phil Kessel: (8)', team: 'USA'},
            {year:'2018', player:'Juhamatti Aaltonen: (20)', team: 'Finland'}
        ]});
};

module.exports = {
    winnerlist
};