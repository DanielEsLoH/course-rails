require "test_helper"

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pages_index_url
    assert_response :success
  end

  test "should get landig_page" do
    get pages_landig_page_url
    assert_response :success
  end
end
