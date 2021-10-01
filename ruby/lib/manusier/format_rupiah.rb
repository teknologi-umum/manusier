# frozen_string_literal: true

module Manusier
  def self.format_rupiah(n, level = 0)
    raise(StandardError, "isi dari argumen pertama harus berupa angka, bukan string atau lainnya") unless n.is_number?

    t = private_self_number_to_dotted_string(n)

    if level.zero?
      return "#{n.negative? ? "(" : ""}Rp #{t}#{n.negative? ? ")" : ""}"
    end

    s = t.split(".")
    v = s.slice(0, s.length - level)
    "#{n.negative? ? "(" : ""}Rp #{v.join(".")} #{$SATUAN_LONG[level + 1]}#{n.negative? ? ")" : ""}"
  end

  def self.private_self_split_per_three(str)
    temp = []

    m = str.length % 3
    case m
    when 2
      temp << str.slice!(0, 2)
    when 1
      temp << str.slice!(0, 1)
    end

    i = 0
    while i < str.length
      temp << str.slice(i, i + 3)
      i += 3
    end

    temp
  end

  def self.private_self_number_to_dotted_string(n)
    s = private_self_split_per_three(n.abs.to_s)
    s.join(".")
  end
end
