
const winnerlist = function(req, res){
    res.render('Medalist',{
        winners:
        [
            {year:'1980', team:'United States'},
            {year:'1984', team:'Soviet Union'},
            {year:'1988', team:'Soviet Union'},
            {year:'1992', team:'Unified Team'},
            {year:'1994', team:'Sweden'},
            {year:'1998', team:'Czech Republic'},
            {year:'2002', team:'Canada'},
            {year:'2006', team:'Sweden'},
            {year:'2010', team:'Canada'},
            {year:'2014', team:'Canada'},
            {year:'2018', team:'Finland'}
        ]});
};
module.exports = {
    winnerlist
};