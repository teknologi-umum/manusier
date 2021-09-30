package manusier_test

import (
	"testing"

	manusier "github.com/teknologi-umum/manusier/go"
)

func TestFormatRupiah(t *testing.T) {
	f := manusier.FormatRupiah(30000)
	if f != "Rp 30.000" {
		t.Error("f should be Rp 30.000, instead it's:", f)
	}
}

func TestFormatRupiah_Negative(t *testing.T) {
	f := manusier.FormatRupiah(-30000)
	if f != "(Rp 30.000)" {
		t.Error("f should be (Rp 30.000), instead it's:", f)
	}
}
