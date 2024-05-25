

// Q14:- Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
import co from "co"
let Guest_list : string[] = ["Aliyan", "sajid", "Ahmed", "saleem"];

for (let i = 0; i < Guest_list.length; i++) {
   console.log(`Dear ${Guest_list[i]} you are invited to dinner .`);
}
