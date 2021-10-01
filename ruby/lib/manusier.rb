# frozen_string_literal: true

require_relative "manusier/version"
require_relative "manusier/format_rupiah"

# Manusier module is a blablabla I"ll explain later
module Manusier
  ANGKA = %w[nol satu dua tiga empat lima enam tujuh delapan sembilan].freeze

  BELASAN = [
    "sepuluh",
    "sebelas",
    "dua belas",
    "tiga belas",
    "empat belas",
    "lima belas",
    "enam belas",
    "tujuh belas",
    "delapan belas",
    "sembilan belas"
  ].freeze

  PULUHAN = [
    "nol",
    "sepuluh",
    "dua puluh",
    "tiga puluh",
    "empat puluh",
    "lima puluh",
    "enam puluh",
    "tujuh puluh",
    "delapan puluh",
    "sembilan puluh"
  ].freeze

  SMALL_SUFFIX = %w[belas puluh ratus].freeze

  SATUAN_LONG = [
    "puluh", # 1
    "ratus", # 2
    "ribu", # 3
    "juta", # 6
    "miliar", # 9
    "triliun", # 12
    "kuadriliun", # 15
    "kuantiliun", # 18
    "sekstiliun", # 21
    "septiliun", # 24
    "oktiliun", # 27
    "noniliun", # 30
    "desiliun" # 33
  ].freeze

  SATUAN_RIBU = [
    "",
    "ribu", # 3
    "juta", # 6
    "miliar", # 9
    "triliun", # 12
    "kuadriliun", # 15
    "kuantiliun", # 18
    "sekstiliun", # 21
    "septiliun", # 24
    "oktiliun", # 27
    "noniliun", # 30
    "desiliun" # 33
  ].freeze

  SATUAN_SHORT = %w[rb jt mi tr kd kn st sp ok nn ds].freeze

  RELASI_DURASI = {
    past: "{?} lalu",
    future: "{?} kedepan",
    x: "{?} milidetik",
    s: "{?} detik",
    m: "{?} menit",
    h: "{?} jam",
    d: "{?} hari",
    o: "{?} bulan",
    y: "{?} tahun"
  }.freeze
end
