package manusier_test

import (
	"testing"

	manusier "github.com/teknologi-umum/manusier/go"
)

func TestDiskon_Persen(t *testing.T) {
	d := manusier.Diskon(50000, manusier.PersenDariX, 10)
	if d != 45000 {
		t.Error("d should be 45000, smh. got this:", d)
	}
}

func TestDiskon_Minimum(t *testing.T) {
	d := manusier.Diskon(50000, manusier.MinimumPembelianX, 5000, 1, 5)
	if d != 45000 {
		t.Error("d should be 45000, smh. got this:", d)
	}
}

func TestDiskon_MinMax(t *testing.T) {
	d := manusier.Diskon(50000, manusier.MinXMaxY, 5000, 5, 20, 10)
	if d != 45000 {
		t.Error("d should be 45000, smh. got this:", d)
	}
}
