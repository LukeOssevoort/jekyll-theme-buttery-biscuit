# Buttery Biscuit: a Jekyll theme

## About

This Jekyll theme is a base, a buttery biscuit base. The goal is to have a theme that is easy to customise whilst using as a Gem based theme, resulting is a basic frame work for any Jekyll project. Made using [chota][chota] as a css framework and [Gutenberg][Gutenberg] for print styling

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-buttery-biscuit"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-buttery-biscuit
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-buttery-biscuit

## Usage

Buttery Biscuit uses its own collection of settings in the `_config.yml` as follows:

```yaml
buttery-biscuit:
  theme: default
  darkmode: false
  fixed-navbar: false
```

The `theme` and `darkmode` settings reference sass files from the `_sass/themes` folder and overwrite the default html variables of [chota][chota] as well as introduce additional css changes.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-buttery-biscuit.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

[chota]: https://jenil.github.io/chota/ "chota css homepage"
[Gutenberg]: https://bafs.github.io/Gutenberg/ "Gutenberg css homepage"