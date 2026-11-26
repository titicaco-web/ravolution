export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      network_admins: {
        Row: {
          granted_at: string
          granted_reason: string
          user_id: string
        }
        Insert: {
          granted_at?: string
          granted_reason?: string
          user_id: string
        }
        Update: {
          granted_at?: string
          granted_reason?: string
          user_id?: string
        }
        Relationships: []
      }
      network_audit_log: {
        Row: {
          action: string
          actor: string | null
          created_at: string
          details: Json
          entity: string
          entity_id: string | null
          id: number
        }
        Insert: {
          action: string
          actor?: string | null
          created_at?: string
          details?: Json
          entity: string
          entity_id?: string | null
          id?: never
        }
        Update: {
          action?: string
          actor?: string | null
          created_at?: string
          details?: Json
          entity?: string
          entity_id?: string | null
          id?: never
        }
        Relationships: []
      }
      network_capabilities: {
        Row: {
          approved: boolean
          created_at: string
          id: string
          kind: string
          name: string
          source_project_id: string | null
          summary: string
          version: string
        }
        Insert: {
          approved?: boolean
          created_at?: string
          id?: string
          kind: string
          name: string
          source_project_id?: string | null
          summary: string
          version?: string
        }
        Update: {
          approved?: boolean
          created_at?: string
          id?: string
          kind?: string
          name?: string
          source_project_id?: string | null
          summary?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "network_capabilities_source_project_id_fkey"
            columns: ["source_project_id"]
            isOneToOne: false
            referencedRelation: "network_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      network_invitations: {
        Row: {
          created_at: string
          email: string
          id: string
          invited_by: string
          project_id: string | null
          role: Database["public"]["Enums"]["network_project_role"]
          status: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          invited_by: string
          project_id?: string | null
          role?: Database["public"]["Enums"]["network_project_role"]
          status?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          invited_by?: string
          project_id?: string | null
          role?: Database["public"]["Enums"]["network_project_role"]
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "network_invitations_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "network_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      network_owner_bootstrap: {
        Row: {
          email: string
        }
        Insert: {
          email: string
        }
        Update: {
          email?: string
        }
        Relationships: []
      }
      network_project_members: {
        Row: {
          created_at: string
          project_id: string
          role: Database["public"]["Enums"]["network_project_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          project_id: string
          role?: Database["public"]["Enums"]["network_project_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          project_id?: string
          role?: Database["public"]["Enums"]["network_project_role"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "network_project_members_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "network_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      network_projects: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
          slug: string
          status: Database["public"]["Enums"]["network_project_status"]
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description?: string
          id?: string
          name: string
          slug: string
          status?: Database["public"]["Enums"]["network_project_status"]
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
          slug?: string
          status?: Database["public"]["Enums"]["network_project_status"]
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      network_recommendations: {
        Row: {
          capability_id: string
          created_at: string
          decided_at: string | null
          decided_by: string | null
          expected_benefit: string
          id: string
          reason: string
          risks: string
          status: string
          target_project_id: string
        }
        Insert: {
          capability_id: string
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          expected_benefit?: string
          id?: string
          reason: string
          risks?: string
          status?: string
          target_project_id: string
        }
        Update: {
          capability_id?: string
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          expected_benefit?: string
          id?: string
          reason?: string
          risks?: string
          status?: string
          target_project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "network_recommendations_capability_id_fkey"
            columns: ["capability_id"]
            isOneToOne: false
            referencedRelation: "network_capabilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "network_recommendations_target_project_id_fkey"
            columns: ["target_project_id"]
            isOneToOne: false
            referencedRelation: "network_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      profesora_comentarios: {
        Row: {
          created_at: string
          estado: string
          id: string
          reportes: number
          texto: string
        }
        Insert: {
          created_at?: string
          estado?: string
          id?: string
          reportes?: number
          texto: string
        }
        Update: {
          created_at?: string
          estado?: string
          id?: string
          reportes?: number
          texto?: string
        }
        Relationships: []
      }
      profesora_valoraciones: {
        Row: {
          claridad: number
          created_at: string
          disponibilidad: number
          dominio: number
          general: number
          id: string
          metodologia: number
          motivacion: number
        }
        Insert: {
          claridad: number
          created_at?: string
          disponibilidad: number
          dominio: number
          general: number
          id?: string
          metodologia: number
          motivacion: number
        }
        Update: {
          claridad?: number
          created_at?: string
          disponibilidad?: number
          dominio?: number
          general?: number
          id?: string
          metodologia?: number
          motivacion?: number
        }
        Relationships: []
      }
      startup_applications: {
        Row: {
          blocker: string | null
          building: string
          company_name: string
          country: string
          created_at: string
          email: string
          founder_name: string
          id: string
          looking_for: string | null
          sector: string | null
          source: string | null
          stage: string
          traction: string | null
          website: string | null
          why_partner: string
        }
        Insert: {
          blocker?: string | null
          building: string
          company_name: string
          country: string
          created_at?: string
          email: string
          founder_name: string
          id?: string
          looking_for?: string | null
          sector?: string | null
          source?: string | null
          stage: string
          traction?: string | null
          website?: string | null
          why_partner: string
        }
        Update: {
          blocker?: string | null
          building?: string
          company_name?: string
          country?: string
          created_at?: string
          email?: string
          founder_name?: string
          id?: string
          looking_for?: string | null
          sector?: string | null
          source?: string | null
          stage?: string
          traction?: string | null
          website?: string | null
          why_partner?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_network_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      network_project_role: "viewer" | "editor" | "admin"
      network_project_status: "active" | "archived"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      network_project_role: ["viewer", "editor", "admin"],
      network_project_status: ["active", "archived"],
    },
  },
} as const
