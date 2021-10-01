package manusier_test

import (
	"testing"
	"time"

	manusier "github.com/teknologi-umum/manusier/go"
)

func TestDurasi_Milidetik(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Millisecond * 5))
	if s != "5 milidetik lalu" {
		t.Error("should be 5 milidetik lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Millisecond * 5))
	if m != "5 milidetik kedepan" {
		t.Error("should be 5 milidetik kedepan. got:", m)
	}
}

func TestDurasi_Detik(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Second * 5))
	if s != "5 detik lalu" {
		t.Error("should be 5 detik lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Second * 5))
	if m != "5 detik kedepan" {
		t.Error("should be 5 detik kedepan. got:", m)
	}
}

func TestDurasi_Menit(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Minute * 10))
	if s != "10 menit lalu" {
		t.Error("should be 10 menit lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Minute * 10))
	if m != "10 menit kedepan" {
		t.Error("should be 10 menit kedepan. got:", m)
	}
}

func TestDurasi_Jam(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Hour * 6))
	if s != "6 jam lalu" {
		t.Error("should be 6 jam lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Hour * 6))
	if m != "6 jam kedepan" {
		t.Error("should be 6 jam kedepan. got:", m)
	}
}

func TestDurasi_Hari(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Hour * 24 * 5))
	if s != "5 hari lalu" {
		t.Error("should be 5 hari lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Hour * 24 * 5))
	if m != "5 hari kedepan" {
		t.Error("should be 5 hari kedepan. got:", m)
	}
}

func TestDurasi_Tahun(t *testing.T) {
	s, _ := manusier.DurasiSejak(time.Now().Add(time.Hour * 24 * 365 * 4))
	if s != "4 tahun lalu" {
		t.Error("should be 4 tahun lalu. got:", s)
	}
	m, _ := manusier.DurasiMenuju(time.Now().Add(-time.Hour * 24 * 365 * 4))
	if m != "4 tahun kedepan" {
		t.Error("should be 4 tahun kedepan. got:", m)
	}
}

func TestDurasi_Error(t *testing.T) {
	_, s := manusier.DurasiSejak(time.Now().Add(-time.Millisecond * 5))
	if s != manusier.ErrDurasiSejak {
		t.Error("should throw ErrDurasiSejak. got:", s)
	}
	_, m := manusier.DurasiMenuju(time.Now().Add(time.Millisecond * 5))
	if m != manusier.ErrDurasiMenuju {
		t.Error("should throw ErrDurasiMenuju. got:", m)
	}
}
