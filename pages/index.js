const Index = () => (
  <div>
    <h1>Hello World!!</h1>
    <p>Insert your email here please</p>

    <form action="/api/mailing-list" method="post">
      First Name
      <input type="text" name="first_name" />
      Last Name
      <input type="text" name="last_name" />
      Email
      <input type="text" name="email" />
      <input type="submit" />
    </form>
  </div>
)

export default Index
