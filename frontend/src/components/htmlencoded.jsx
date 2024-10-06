import React from "react";

const htmlencoded = () => {
  return (
    <div>
      <div className="app">
        <h1> Hello this is today learning</h1>
        <p>
          <h3>MongoDB: &#123; read, update &#125;</h3>
          <p>
            {" "}
            this one is surprising i cannot directly use curly braces into my
            react enviroment <br />
            so i have to use native HTML esacpe code to embade special character
            as a text on this currect section i'm reading now
            <br />
            like this <br />
            &amp;#123; for &#123; and this &amp;#125; for this &#125;
            <p>
              {" "}
              these acodes are clalled HTML entity come onnn google them <br />{" "}
              Don't be shy u piece of shit{" "}
              <a href="https://www.w3schools.com/html/html_entities.asp">
                Google html entities website w3school
              </a>{" "}
            </p>
            <h2>
              {" "}
              Class <br />
              Simultaneous read and update operation{" "}
            </h2>
            <span> Syntax:</span>
            <p>
              {" "}
              collectionName.findOneAndUpdate( <br />
              &#123; pipeline 1 &#125; , &#123; pipeline 2 &#125; , &#123;
              pipeline 3 &#125; )
              <table>
                <tr>
                  <td>
                    {" "}
                    <bold>Pipeline 1: </bold>
                  </td>
                  <td> Flitering</td>
                  <td>
                    {" "}
                    simultaneous many keys-vlaue pair or a particular key-value
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <bold>Pipeline 2: </bold>
                  </td>
                  <td>CRUD operation</td>
                  <td>
                    {" "}
                    operator like $&#123;set,push,pop,inc , unset ..... &#125;{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <bold>Pipeline 3: </bold>
                  </td>
                  <td>
                    {" "}
                    aka options for controling the behavior of
                    findOneAndUpdate() using various options{" "}
                  </td>
                  <td>&#123; new ..... TBD&#125; </td>
                </tr>
              </table>
              <h3> Theory :</h3>
              <p>
                <italic>
                  The findOneAndUpdate() function in MongoDB is a powerful
                  method that allows you to find a single document based on a
                  filter, apply an update to it, and optionally return either
                  the original or the updated document.
                </italic>
              </p>
              This function is commonly used when you want to modify a document
              and get the modified document back in one atomic operation.
              <p>
                <img src={update} />
                <img src={Options} />
              </p>
            </p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default htmlencoded;
