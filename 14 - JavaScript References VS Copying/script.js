    // start with strings, numbers and booleans
    // let age = 100;
    // let age2 = age;
    // console.log(age, age2);
    // age = 200;
    // console.log(age, age2);

    // let name = 'wes';
    // let name2 = name;
    // console.log(name, name2);
    // name = 'wisely'
    // console.log(name, name2);
    

    


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(team, players);
    team[3] = 'lux';
    console.log(team, players);

    


    // You might think we can just do something like this:

    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    team2[3] = 'john';
    console.log(team2, players);
    
    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    team3[3] = 'john';
    console.log(team3, players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'john';
    console.log(team4, players);

    
    const team5 = Array.from(players);
    team5[3] = 'john';
    console.log(team5, players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    captain.age = 100;
    console.log(captain, person);

    // how do we take a copy instead?
    const captain2 = Object.assign({}, person, {age: 120, number: 99});
    //captain2.age = 120;
    //captain2.number = 99;
    console.log(captain2, person);

    // We will hopefully soon see the object ...spread
    const captain3 = {...person}
    captain3.age = 140;
    console.log(captain3, person);

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const wes = {
        name: 'wes',
        age: 400,
        social: {
            twitter: '@patwary',
            facebook: 'patwary'
        }
    }
    console.log(wes);

    const wes2 = Object.assign({}, wes);
    wes2.social.twitter = 'wisely';
    console.clear();
    console.log(wes2, wes);

    
    const wes3 = JSON.parse(JSON.stringify(wes));
    wes3.name = 'themelooks'
    wes3.social.facebook = 'themelooks';
    console.log(wes3, wes);
    

    const wes4 = {...wes}
    wes4.name = 'changed'
    wes4.social.facebook = 'changed';
    console.clear();
    console.log(wes4, wes);
    



    