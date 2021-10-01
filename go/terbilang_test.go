package manusier_test

import (
	"testing"

	manusier "github.com/teknologi-umum/manusier/go"
)

func TestTerbilang_Normal(t *testing.T) {
	r := manusier.Terbilang(1234567)
	if r != "satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh" {
		t.Error("should get satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh. instead got:", r)
	}
}

func TestTerbilang_Minus(t *testing.T) {
	r := manusier.Terbilang(-1234)
	if r != "minus seribu dua ratus tiga puluh empat" {
		t.Error("should get minus seribu dua ratus tiga puluh empat. instead got:", r)
	}
}

func TestTerbilang_Nol(t *testing.T) {
	r := manusier.Terbilang(0)
	if r != "nol" {
		t.Error("should get nol. instead got:", r)
	}
}

func TestTerbilang_SeratusLong(t *testing.T) {
	r := manusier.Terbilang(130_000_000)
	if r != "seratus tiga puluh juta" {
		t.Error("should get seratus tiga puluh juta. instead got:", r)
	}
}

func TestTerbilang_Seratus(t *testing.T) {
	r := manusier.Terbilang(100)
	if r != "seratus" {
		t.Error("should get seratus. instead got:", r)
	}
}

func TestTerbilang_Seribu(t *testing.T) {
	r := manusier.Terbilang(1000)
	if r != "seribu" {
		t.Error("should get seribu. instead got:", r)
	}
}

func TestTerbilang_Triliun(t *testing.T) {
	r := manusier.Terbilang(91_234_567_912_345)
	if r != "sembilan puluh satu triliun dua ratus tiga puluh empat miliar lima ratus enam puluh tujuh juta sembilan ratus dua belas ribu tiga ratus empat puluh lima" {
		t.Error("should get sembilan puluh satu triliun dua ratus tiga puluh empat miliar lima ratus enam puluh tujuh juta sembilan ratus dua belas ribu tiga ratus empat puluh lima. instead got:", r)
	}
}
