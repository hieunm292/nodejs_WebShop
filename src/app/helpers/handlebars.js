const handlebars=require('handlebars');

module.exports={
  sum: (a, b) => a + b,

  sortable:(field,sort)=>{
    const sortType=field===sort.column ? sort.type : 'default';
    const icons={
        default:'oi oi-elevator',
        desc:'oi oi-sort-descending',
        asc:'oi oi-sort-ascending',
    };

    const types={
        default:'desc',
        desc:'asc',
        asc:'desc',
    };

    const icon =icons[sortType];
    const type =types[sortType];

    const address=handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

    const output= `<a href="${address}" class=""><span class="${icon}"></span></a>`;

    return new handlebars.SafeString(output);
  }
}