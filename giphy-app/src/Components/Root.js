import React from "react";
import "./styles.css";
import Footer from "./footer";
import NavBar from "./navbar";
import StartUpCard from "./startupcard";
import SearchCard from "./search";

let original_items;
class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      value: "",
      isAlphabet: false,
      items: [],
      search: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.sortedArray = this.sortedArray.bind(this);
  }

  componentDidMount() {
    fetch(
			"https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=chesseburger&limit=25&offset=0&rating=G&lang=en"
		)
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.data,
					});
				},

				(error) => {
					this.setState({
						isLoaded: true,
						error,
					});
				}
			);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.setState({ search: this.state.search });
    }
    if (prevState.isAlphabet !== this.state.isAlphabet) {
      this.setState({
        items: this.state.items,
        isAlphabet: this.state.isAlphabet,
      });
    }
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({ value: event.target.value });
    const queryData = this.state.items.filter((item) =>
      item.name.toLowerCase().includes(this.state.value)
    );
    if (event.target.value !== "") {
      this.setState({ search: queryData });
    } else {
      this.setState({ search: [] });
    }
  }

  sortedArray() {
    this.setState({ isAlphabet: !this.state.isAlphabet });
    if (!this.state.isAlphabet) {
      original_items = Array.from(this.state.items); // hard copy items to send back to default state on clear
      const sortedArray = this.state.items.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.setState({ items: sortedArray });
    } else {
      this.setState({ items: original_items });
    }

    // sort search
    if (this.state.value.length > 0) {
      const sortedArray = this.state.search.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      this.setState({ search: sortedArray });
    }
  }

  render() {
    const { error, isLoaded, items, search } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="fixed-top">
            <NavBar />
            <SearchCard
              onChange={this.handleChange}
              value={this.state.value}
              search_len={this.state.search.length}
              input_len={this.state.value.length}
              onClick={this.sortedArray}
              isAlpha={this.state.isAlphabet}
            />
          </div>

          <div
            className="container py-5 bg-light shadow"
            style={{ marginTop: 300 }}
          >
            {search.length !== 0
              ? search.map((item) => (
                  <StartUpCard
                    key={item.id}
                    id={item.id}
                    image={item.image_url}
                    name={item.name}
                    description={item.short_description}
                  />
                ))
              : items.map((item) => (
                  <StartUpCard
                    key={item.id}
                    id={item.id}
                    image={item.image_url}
                    name={item.name}
                    description={item.short_description}
                  />
                ))}
          </div>

          <Footer />
        </div>
      );
    }
  }
}

export default Root;
