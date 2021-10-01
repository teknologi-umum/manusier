package manusier

var ANGKA = []string{
	"nol",
	"satu",
	"dua",
	"tiga",
	"empat",
	"lima",
	"enam",
	"tujuh",
	"delapan",
	"sembilan",
	"sepuluh",
	"sebelas",
}

var BELASAN = []string{
	"sepuluh",
	"sebelas",
	"dua belas",
	"tiga belas",
	"empat belas",
	"lima belas",
	"enam belas",
	"tujuh belas",
	"delapan belas",
	"sembilan belas",
}

var PULUHAN = []string{
	"nol",
	"sepuluh",
	"dua puluh",
	"tiga puluh",
	"empat puluh",
	"lima puluh",
	"enam puluh",
	"tujuh puluh",
	"delapan puluh",
	"sembilan puluh",
}
var SMALL_SUFFIX = []string{"belas", "puluh", "ratus"}

var SATUAN_LONG = []string{
	"puluh",
	"ratus",
	"ribu",
	"juta",
	"miliar",
	"triliun",
	"kuadriliun",
	"kuantiliun",
	"sekstiliun",
	"septiliun",
	"oktiliun",
	"noniliun",
	"desiliun",
}

var SATUAN_RIBU = []string{
	"",
	"ribu",       // 3
	"juta",       // 6
	"miliar",     // 9
	"triliun",    // 12
	"kuadriliun", // 15
	"kuantiliun", // 18
	"sekstiliun", // 21
	"septiliun",  // 24
	"oktiliun",   // 27
	"noniliun",   // 30
	"desiliun",   // 33
}

var SATUAN_SHORT = []string{"rb", "jt", "mi", "tr", "kd", "kn", "st", "sp", "ok", "nn", "ds"}

var RELASI_DURASI = map[string]string{
	"past":   "{?} lalu",
	"future": "{?} kedepan",
	"x":      "{?} milidetik",
	"s":      "{?} detik",
	"m":      "{?} menit",
	"h":      "{?} jam",
	"d":      "{?} hari",
	"o":      "{?} bulan",
	"y":      "{?} tahun",
}
