# @britannica/cra-template

> Britannica's `create-react-app` template

### In the box
- Built with Reactstrap
- React Router w/ routing utility methods
  ```js
  // When defining routes
  <Route path={Routes.POST.path} /> // <Route path="/post/:id" />
  
  // When building links
  <Link to={Routes.POST.toLink({ id: 123 })} /> // <Link to="/post/123" />
  ```
- Create resusable layouts using Templates
  ```js
  // In our example, DefaultTemplate contains our Header and Footer, which will automatically be included
  const MyPage = () => (
    <DefaultTemplate>
      <Container>
        <h1>My Page</h1>
        {/* ...the rest of the page */}
      </Container>
    </DefaultTemplate>
  );
  ```
- Automatic linting on commit

### Usage

```bin
$ npx create-react-app --template @britannica/cra-template
```
