# frozen_string_literal: true

require "test_helper"

class ManusierTest < Minitest::Test
  def test_format_rupiah_positive
    r = Manusier.format_rupiah 50000
    assert_equal r "Rp 50.000"
  end

  def test_format_rupiah_negative
    r = Manusier.format_rupiah -50000
    assert_equal r "(Rp 50.000)"
  end
end
