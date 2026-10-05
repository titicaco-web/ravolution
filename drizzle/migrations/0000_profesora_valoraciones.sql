CREATE TABLE public.profesora_valoraciones (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  claridad smallint NOT NULL CHECK (claridad BETWEEN 1 AND 5),
  dominio smallint NOT NULL CHECK (dominio BETWEEN 1 AND 5),
  metodologia smallint NOT NULL CHECK (metodologia BETWEEN 1 AND 5),
  motivacion smallint NOT NULL CHECK (motivacion BETWEEN 1 AND 5),
  disponibilidad smallint NOT NULL CHECK (disponibilidad BETWEEN 1 AND 5),
  general smallint NOT NULL CHECK (general BETWEEN 1 AND 5),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.profesora_valoraciones TO service_role;
ALTER TABLE public.profesora_valoraciones ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.profesora_comentarios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  texto text NOT NULL CHECK (length(texto) BETWEEN 1 AND 2000),
  estado text NOT NULL DEFAULT 'pendiente' CHECK (estado IN ('pendiente','aprobado','oculto')),
  reportes integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.profesora_comentarios TO service_role;
ALTER TABLE public.profesora_comentarios ENABLE ROW LEVEL SECURITY;