module Spree
  class HomeController < Spree::StoreController
    helper 'spree/products'
    respond_to :html

    def index
      @searcher = build_searcher(params.merge(include_images: true))
      @products = @searcher.retrieve_products
      @products = @products.includes(:possible_promotions) if @products.respond_to?(:includes)
      @taxonomies = Spree::Taxonomy.includes(root: :children)
      @order = current_order || Order.incomplete.
                                  includes(line_items: [variant: [:images, :option_values, :product]]).
                                  find_or_initialize_by(guest_token: cookies.signed[:guest_token])
      associate_user
    end

    def sandwiches
    end
    
  end
end
