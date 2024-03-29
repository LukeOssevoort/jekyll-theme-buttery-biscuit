# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-buttery-biscuit"
  spec.version       = "0.3.7"
  spec.authors       = ["Luke Ossevoort"]
  spec.email         = ["luke@ossevoort.xyz"]

  spec.summary       = "A Jekyll theme that acts as a base, a buttery biscuit base."
  spec.homepage      = "https://github.com/LukeOssevoort/jekyll-theme-buttery-biscuit"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2.2"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-spaceship"
  spec.add_runtime_dependency "jekyll-paginate"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll_picture_tag"
  spec.add_runtime_dependency "webrick"
end
